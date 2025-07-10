const WebSocket = require('ws');
const http = require('http');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

// 创建HTTP服务器
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

// 创建WebSocket服务器
const wss = new WebSocket.Server({ server });

// 游戏状态
class Game {
    constructor() {
        this.players = new Map(); // WebSocket -> player info
        this.readyPlayers = new Set();
        this.currentDrawer = null;
        this.currentWord = '';
        this.wordLength = 0;
        this.timer = 60;
        this.gameStarted = false;
        this.roundStarted = false;
        this.drawingHistory = [];
        this.wordBank = this.createWordBank();
        this.roomId = crypto.randomBytes(3).toString('hex').toUpperCase();
    }
    
    createWordBank() {
        return {
            2: ["苹果", "香蕉", "西瓜", "老虎", "大象", "飞机", "火车", "电脑"],
            3: ["自行车", "西红柿", "长颈鹿", "电视机", "洗衣机", "电冰箱"],
            4: ["智能手机", "笔记本电脑", "高速公路", "万里长城"],
            5: ["中华人民共和国", "中央电视台"]
        };
    }
    
    getRandomWord() {
        const lengths = Object.keys(this.wordBank).map(Number);
        const length = lengths[Math.floor(Math.random() * lengths.length)];
        const words = this.wordBank[length];
        const word = words[Math.floor(Math.random() * words.length)];
        return { word, length };
    }
    
    addPlayer(ws, name) {
        const isHost = this.players.size === 0;
        this.players.set(ws, {
            name,
            isDrawer: false,
            isReady: false,
            isHost,
            score: 0,
            ws
        });
        
        // 发送欢迎消息
        ws.send(JSON.stringify({
            type: 'welcome',
            name,
            isHost,
            roomId: this.roomId
        }));
        
        this.broadcastPlayerList();
        this.broadcastReadyList();
    }
    
    removePlayer(ws) {
        const player = this.players.get(ws);
        if (player) {
            this.readyPlayers.delete(ws);
            this.players.delete(ws);
            
            // 如果主机离开，选择新主机
            if (player.isHost && this.players.size > 0) {
                const newHost = this.players.values().next().value;
                newHost.isHost = true;
                newHost.ws.send(JSON.stringify({
                    type: 'host_promoted'
                }));
            }
            
            this.broadcastPlayerList();
            this.broadcastReadyList();
        }
    }
    
    setPlayerReady(ws, isReady) {
        const player = this.players.get(ws);
        if (player) {
            player.isReady = isReady;
            if (isReady) {
                this.readyPlayers.add(ws);
            } else {
                this.readyPlayers.delete(ws);
            }
            
            this.broadcastPlayerList();
            this.broadcastReadyList();
            
            return {
                name: player.name,
                isReady
            };
        }
        return null;
    }
    
    selectDrawer() {
        if (this.players.size === 0) return null;
        
        // 找到分数最低的玩家
        let minScore = Infinity;
        let candidates = [];
        
        this.players.forEach(player => {
            if (player.score < minScore) {
                minScore = player.score;
                candidates = [player.ws];
            } else if (player.score === minScore) {
                candidates.push(player.ws);
            }
        });
        
        // 随机选择一个候选人
        const drawerWs = candidates[Math.floor(Math.random() * candidates.length)];
        const drawer = this.players.get(drawerWs);
        
        // 重置所有玩家的画手状态
        this.players.forEach(player => {
            player.isDrawer = false;
        });
        
        drawer.isDrawer = true;
        this.currentDrawer = drawer.name;
        return drawer;
    }
    
    startNewRound() {
        const { word, length } = this.getRandomWord();
        this.currentWord = word;
        this.wordLength = length;
        this.roundStarted = true;
        this.timer = 60;
        this.drawingHistory = [];
        
        // 重置所有玩家的准备状态
        this.players.forEach(player => {
            player.isReady = false;
        });
        this.readyPlayers.clear();
        
        return { word, length };
    }
    
    checkGuess(guess, playerName) {
        if (guess === this.currentWord) {
            // 更新分数
            this.players.forEach(player => {
                if (player.name === playerName) {
                    player.score += 10;
                } else if (player.name === this.currentDrawer) {
                    player.score += 5;
                }
            });
            
            this.broadcastPlayerList();
            return true;
        }
        return false;
    }
    
    getPlayerList() {
        return Array.from(this.players.values()).map(player => ({
            name: player.name,
            isDrawer: player.isDrawer,
            score: player.score,
            isReady: player.isReady
        }));
    }
    
    getReadyList() {
        return Array.from(this.players.values()).map(player => ({
            name: player.name,
            isHost: player.isHost,
            isReady: player.isReady
        }));
    }
    
    broadcastPlayerList() {
        this.broadcast({
            type: 'player_list',
            players: this.getPlayerList()
        });
    }
    
    broadcastReadyList() {
        this.broadcast({
            type: 'ready_list',
            players: this.getReadyList()
        });
    }
    
    broadcast(message, excludeWs = null) {
        const messageStr = JSON.stringify(message);
        
        this.players.forEach((player, ws) => {
            if (ws !== excludeWs && ws.readyState === WebSocket.OPEN) {
                ws.send(messageStr);
            }
        });
    }
    
    canStartGame() {
        return this.readyPlayers.size >= 2 && 
               this.readyPlayers.size === this.players.size;
    }
}

const game = new Game();

// WebSocket连接处理
wss.on('connection', (ws) => {
    console.log('新玩家连接');
    
    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            
            switch (data.type) {
                case 'join':
                    handleJoin(ws, data);
                    break;
                    
                case 'ready':
                    handleReady(ws, true);
                    break;
                    
                case 'unready':
                    handleReady(ws, false);
                    break;
                    
                case 'chat':
                    handleChat(ws, data);
                    break;
                    
                case 'draw_start':
                case 'draw':
                case 'clear':
                case 'undo':
                    handleDrawing(ws, data);
                    break;
                    
                case 'start_game':
                    handleStartGame(ws);
                    break;
            }
        } catch (err) {
            console.error('消息处理错误:', err);
        }
    });
    
    ws.on('close', () => {
        console.log('玩家断开连接');
        game.removePlayer(ws);
    });
});

function handleJoin(ws, data) {
    const playerName = data.name || `玩家${Math.floor(Math.random() * 1000)}`;
    game.addPlayer(ws, playerName);
}

function handleReady(ws, isReady) {
    const result = game.setPlayerReady(ws, isReady);
    if (result) {
        game.broadcast({
            type: isReady ? 'player_ready' : 'player_unready',
            playerName: result.name
        });
    }
}

function handleChat(ws, data) {
    const player = game.players.get(ws);
    if (!player) return;
    
    let isCorrect = false;
    if (game.roundStarted && !player.isDrawer) {
        isCorrect = game.checkGuess(data.message, player.name);
        if (isCorrect) {
            endRound(player.name);
        }
    }
    
    game.broadcast({
        type: 'chat',
        sender: player.name,
        message: data.message,
        isCorrect
    }, ws);
}

function handleDrawing(ws, data) {
    const player = game.players.get(ws);
    if (!player || !player.isDrawer || !game.roundStarted) return;
    
    game.drawingHistory.push(data);
    game.broadcast(data, ws);
}

function handleStartGame(ws) {
    const player = game.players.get(ws);
    if (!player || !player.isHost || !game.canStartGame()) return;
    
    game.gameStarted = true;
    const drawer = game.selectDrawer();
    const { word, length } = game.startNewRound();
    
    game.broadcast({
        type: 'start_game',
        drawer: drawer.name,
        word,
        wordLength: length,
        isDrawer: drawer.ws === ws
    });
    
    startTimer();
}

let timerInterval;
function startTimer() {
    clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        game.timer--;
        
        game.broadcast({
            type: 'timer_update',
            time: game.timer
        });
        
        if (game.timer <= 0) {
            clearInterval(timerInterval);
            endRound();
        }
    }, 1000);
}

function endRound(winner = null) {
    clearInterval(timerInterval);
    game.roundStarted = false;
    
    game.broadcast({
        type: 'round_end',
        winner,
        word: game.currentWord
    });
    
    // 3秒后开始下一轮
    setTimeout(() => {
        if (game.players.size >= 2) {
            const drawer = game.selectDrawer();
            const { word, length } = game.startNewRound();
            
            game.broadcast({
                type: 'start_game',
                drawer: drawer.name,
                word,
                wordLength: length
            });
            
            startTimer();
        } else {
            // 游戏结束
            let winner = null;
            let maxScore = -1;
            
            game.players.forEach(player => {
                if (player.score > maxScore) {
                    maxScore = player.score;
                    winner = player.name;
                }
            });
            
            game.broadcast({
                type: 'game_end',
                winner
            });
            
            game.gameStarted = false;
        }
    }, 3000);
}

// 启动服务器
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`服务器已启动，访问 http://localhost:${PORT}`);
    console.log(`游戏房间号: ${game.roomId}`);
});
