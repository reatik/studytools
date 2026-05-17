// ========== 公共云端数据配置 ==========
const SUPABASE_URL = "https://bcyvaqstzddaqklchstx.supabase.co";
const SUPABASE_KEY = "sb_publishable_MRPLCWIbFx9MXWVDD493AA_gWoK9QLP";

// 初始化数据库
let supabaseClient = null;

function getSupabaseClient() {
    if (!supabaseClient) {
        if (!window.supabase) {
            console.error("❌ Supabase SDK 未加载！window.supabase 是 undefined");
            console.log("   请检查网络连接或 Supabase CDN 是否可访问");
            return null;
        }
        try {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
            console.log("✅ Supabase 客户端初始化成功");
        } catch (e) {
            console.error("❌ Supabase 客户端初始化失败:", e);
            return null;
        }
    }
    return supabaseClient;
}

// 测试 Supabase 连接
async function testSupabaseConnection() {
    console.log("🔍 开始测试 Supabase 连接...");
    const client = getSupabaseClient();
    if (!client) {
        console.error("❌ 无法获取 Supabase 客户端");
        return false;
    }
    
    try {
        // 测试读取数据
        const { data, error } = await client
            .from("user_stats")
            .select("id, username")
            .limit(5);
        
        if (error) {
            console.error("❌ Supabase 连接测试失败:", error);
            console.error("   错误代码:", error.code);
            console.error("   错误消息:", error.message);
            console.error("   错误详情:", error.details);
            return false;
        }
        
        console.log("✅ Supabase 连接成功！当前表中有", data?.length || 0, "条记录");
        if (data && data.length > 0) {
            console.log("   示例数据:", data[0]);
        }
        return true;
    } catch (e) {
        console.error("❌ Supabase 连接异常:", e);
        return false;
    }
}

// 页面加载完成后检查 Supabase 状态
window.addEventListener('load', function() {
    console.log("🔧 页面加载完成，检查 Supabase 状态:");
    console.log("   window.supabase:", typeof window.supabase);
    if (window.supabase) {
        console.log("   ✅ Supabase SDK 已加载");
    } else {
        console.warn("   ⚠️ Supabase SDK 未加载");
    }
});

// ==============================================
// 获取用户ID（核心：登录用户 / 游客 自动区分）
// ==============================================
function getUserId() {
    // 1. 已登录 → 用云端账号ID
    if (localStorage.getItem("game_logged_in") === "true") {
        const uid = localStorage.getItem("game_user_id");
        if (!uid) {
            console.warn("⚠️ 已登录但 game_user_id 为空，回退到游客模式");
            // 回退到游客ID
        } else {
            return uid;
        }
    }

    // 2. 未登录 → 游客ID（只本地用，不上传）
    let vid = localStorage.getItem("visitor_id");
    if (!vid) {
        vid = "visitor_" + Math.random().toString(36).substr(2, 10);
        localStorage.setItem("visitor_id", vid);
    }
    return vid;
}

// ==============================================
// 保存数据（所有页面共用）
// 规则：
// ✅ 游客 → 只存本地，不上传云端
// ✅ 登录 → 自动上传云端
// ==============================================
async function saveUserStats(pageName, stats) {
    const userId = getUserId();
    const isLoggedIn = localStorage.getItem("game_logged_in") === "true";
    const nickname = localStorage.getItem("game_nickname");
    
    console.log("=".repeat(50));
    console.log(`🔍 saveUserStats 开始执行`);
    console.log(`   pageName: ${pageName}`);
    console.log(`   userId: ${userId}`);
    console.log(`   isLoggedIn: ${isLoggedIn}`);
    console.log(`   nickname: ${nickname}`);
    console.log(`   stats:`, stats);
    console.log("=".repeat(50));

    // ======================
    // 游客：只存本地，不上传
    // ======================
    if (!isLoggedIn || !nickname || !userId || userId.startsWith("visitor_")) {
        console.log(`📌 【游客/未登录】${pageName} 数据只保存本地`);
        localStorage.setItem(
            "visitor_stats_" + pageName,
            JSON.stringify(stats)
        );
        console.log(`📌 【游客】${pageName} 数据已本地保存`);
        console.log(`   原因: isLoggedIn=${isLoggedIn}, nickname=${nickname}, userId=${userId}`);
        return;
    }

    // ======================
    // 登录用户：上传云端
    // ======================
    console.log(`📤 【登录用户】准备上传到云端...`);
    
    const client = getSupabaseClient();
    if (!client) {
        console.log("❌ Supabase 客户端获取失败");
        return;
    }
    
    console.log("✅ Supabase 客户端正常");

    // 使用 fetch API 直接发送请求（更详细的调试）
    const payload = {
        user_id: userId,
        username: nickname,
        max_combo: stats.max_combo || stats.maxCombo || 0,
        total_correct: stats.total_correct || stats.totalCorrect || 0,
        total_questions: stats.total_questions || stats.totalQuestions || 0,
        accuracy: stats.accuracy || 0,
        last_page: pageName,
        update_time: new Date().toISOString()
    };
    
    console.log("📦 准备发送的数据:", JSON.stringify(payload, null, 2));

    try {
        // 方法1: 使用 Supabase SDK 的 upsert
        console.log("📡 尝试使用 SDK upsert...");
        const { data, error, status, statusText } = await client
            .from("user_stats")
            .upsert([payload], { 
                onConflict: 'user_id'
            });

        console.log(`📥 SDK upsert 响应: status=${status}, statusText=${statusText}`);
        console.log("   data:", data);
        console.log("   error:", error);

        if (error) {
            console.log("❌ SDK upsert 失败，尝试使用 fetch API...");
            
            // 方法2: 使用 fetch API 直接发送请求
            try {
                const tableUrl = `${SUPABASE_URL}/rest/v1/user_stats`;
                console.log(`📡 尝试使用 fetch API: ${tableUrl}`);
                
                const fetchResponse = await fetch(tableUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'apikey': SUPABASE_KEY,
                        'Authorization': `Bearer ${SUPABASE_KEY}`,
                        'Prefer': 'resolution=merge-duplicates'
                    },
                    body: JSON.stringify(payload)
                });
                
                console.log(`📥 fetch 响应状态: ${fetchResponse.status} ${fetchResponse.statusText}`);
                const responseText = await fetchResponse.text();
                console.log(`📥 fetch 响应内容: ${responseText}`);
                
                if (fetchResponse.ok) {
                    console.log(`✅ 【登录】${pageName} 数据已同步云端 (fetch)`);
                } else {
                    console.log(`❌ fetch 失败: ${fetchResponse.status} ${fetchResponse.statusText}`);
                    console.log(`   响应: ${responseText}`);
                }
            } catch (fetchErr) {
                console.error("❌ fetch API 也失败了:", fetchErr);
            }
        } else {
            console.log(`✅ 【登录】${pageName} 数据已同步云端`);
        }
    } catch (e) {
        console.error("⚠️ 保存过程出现异常:", e);
        console.error("   错误类型:", e.name);
        console.error("   错误消息:", e.message);
        console.error("   错误堆栈:", e.stack);
    }
    
    console.log("=".repeat(50));
}

// ==============================================
// 以下是给 个人中心 使用的工具函数（不用管）
// ==============================================

// 退出登录
function logout() {
    localStorage.removeItem("game_logged_in");
    localStorage.removeItem("game_user_id");
    localStorage.removeItem("game_nickname");
}

// 清空游客本地数据
function clearVisitorAllData() {
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith("visitor_")) {
            localStorage.removeItem(key);
        }
    });
}

// 清空登录用户云端数据（个人中心用）
async function clearUserCloudData() {
    const userId = getUserId();
    if (userId.startsWith("visitor_")) return;

    const client = getSupabaseClient();
    if (client) {
        await client.from("user_stats").delete().eq("user_id", userId);
    }
    logout();
}