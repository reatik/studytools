// ========== 腾讯云 CloudBase 配置 ==========
const CLOUDBASE_ENV_ID = "zxxlts-d5gzvmtbvb30b1545";

// 全局单例
let cloudbaseApp = null;
let cloudbaseDb = null;

async function getCloudBaseApp() {
    if (cloudbaseApp) return cloudbaseApp;
    if (typeof cloudbase === 'undefined') return null;

    try {
        cloudbaseApp = cloudbase.init({
            env: CLOUDBASE_ENV_ID,
            timeout: 30000
        });

        // 强制匿名登录（免费版唯一解决方案）
        await cloudbaseApp.auth().anonymousAuthProvider().signIn();
        console.log("✅ 匿名登录成功");
    } catch (err) {
        console.error("❌ 初始化失败", err);
        return null;
    }
    return cloudbaseApp;
}

// 获取数据库对象（异步）
async function getCloudBaseDb() {
    if (cloudbaseDb) return cloudbaseDb;
    
    const app = await getCloudBaseApp();
    if (!app) return null;
    
    cloudbaseDb = app.database();
    return cloudbaseDb;
}

// ========== 用户身份核心方法 ==========
function getUserId() {
    if (localStorage.getItem("game_logged_in") === "true") {
        const loginUid = localStorage.getItem("game_user_id");
        if (loginUid) return loginUid;
    }
    return getVisitorUniqueId();
}

function getVisitorUniqueId() {
    let visitorId = localStorage.getItem("visitor_id");
    if (!visitorId) {
        visitorId = "visitor_" + Math.random().toString(36).slice(2, 12);
        localStorage.setItem("visitor_id", visitorId);
    }
    return visitorId;
}

function isRealLoginUser() {
    const loginState = localStorage.getItem("game_logged_in") === "true";
    const uid = localStorage.getItem("game_user_id");
    const nickname = localStorage.getItem("game_nickname");
    return loginState && !!uid && !!nickname;
}

// ========== 通用云端数据保存 ==========
async function saveCloudData(tableName, saveData) {
    const userId = getUserId();
    const isLogin = isRealLoginUser();

    if (!isLogin || userId.startsWith("visitor_")) {
        localStorage.setItem(`local_data_${tableName}`, JSON.stringify(saveData));
        console.log(`📌 游客模式：${tableName} 数据本地保存`);
        return;
    }

    const app = await getCloudBaseApp();
    if (!app) return;

    try {
        const db = app.database();
        const submitData = { user_id: userId, ...saveData };
        
        const res = await db.collection(tableName).where({ user_id: userId }).get();
        if (res?.data?.length > 0) {
            await db.collection(tableName).where({ user_id: userId }).update(saveData);
        } else {
            await db.collection(tableName).add(submitData);
        }
        console.log(`✅ 云端保存成功 | 表：${tableName}`);
    } catch (err) {
        console.error(`❌ 云端保存失败 ${tableName}：`, err);
    }
}

// ========== 通用云端数据读取 ==========
async function getCloudData(tableName) {
    const userId = getUserId();
    const isLogin = isRealLoginUser();

    if (!isLogin || userId.startsWith("visitor_")) {
        const localStr = localStorage.getItem(`local_data_${tableName}`);
        return localStr ? JSON.parse(localStr) : null;
    }

    const app = await getCloudBaseApp();
    if (!app) return null;

    try {
        const db = app.database();
        const res = await db.collection(tableName).where({ user_id: userId }).get();
        return res?.data?.length ? res.data[0] : null;
    } catch (err) {
        console.error(`❌ 云端读取失败 ${tableName}：`, err);
        return null;
    }
}

// ========== 登录退出工具方法 ==========
function userLogout() {
    localStorage.removeItem("game_logged_in");
    localStorage.removeItem("game_user_id");
    localStorage.removeItem("game_nickname");
    location.reload();
}

function clearAllVisitorLocalData() {
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith("visitor_") || key.startsWith("local_data_")) {
            localStorage.removeItem(key);
        }
    });
}

// 页面加载初始化
window.addEventListener("load", () => {
    console.log("📦 CloudBase 公共库 common.js 加载完成");
});