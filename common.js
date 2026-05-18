// ========== 公共云端数据库配置 ==========
const SUPABASE_URL = "https://bcyvaqstzddaqklchstx.supabase.co";
const SUPABASE_KEY = "sb_publishable_MRPLCWIbFx9MXWVDD493AA_gWoK9QLP";

// 全局Supabase客户端单例
let supabaseClient = null;

// 初始化数据库客户端
function getSupabaseClient() {
    if (!supabaseClient) {
        if (!window.supabase) {
            console.error("❌ Supabase SDK 未加载，请检查引入脚本");
            return null;
        }
        try {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
            console.log("✅ Supabase 客户端初始化成功");
        } catch (err) {
            console.error("❌ 客户端初始化失败：", err);
            return null;
        }
    }
    return supabaseClient;
}

// 测试数据库连通性
async function testSupabaseConnection() {
    const client = getSupabaseClient();
    if (!client) return false;
    try {
        const { error } = await client.from("users").select("id").limit(1);
        if (error) throw error;
        console.log("✅ 数据库连接正常");
        return true;
    } catch (err) {
        console.error("❌ 数据库连接失败：", err);
        return false;
    }
}

// ========== 用户身份核心方法 ==========
// 获取用户唯一ID（登录账号ID / 游客本地ID）
function getUserId() {
    // 已登录优先取云端账号ID
    if (localStorage.getItem("game_logged_in") === "true") {
        const loginUid = localStorage.getItem("game_user_id");
        if (loginUid) return loginUid;
    }
    // 未登录/登录ID失效，生成游客ID
    return getVisitorUniqueId();
}

// 生成本地游客ID
function getVisitorUniqueId() {
    let visitorId = localStorage.getItem("visitor_id");
    if (!visitorId) {
        visitorId = "visitor_" + Math.random().toString(36).slice(2, 12);
        localStorage.setItem("visitor_id", visitorId);
    }
    return visitorId;
}

// 判断当前是否为正式登录用户
function isRealLoginUser() {
    const loginState = localStorage.getItem("game_logged_in") === "true";
    const uid = localStorage.getItem("game_user_id");
    const nickname = localStorage.getItem("game_nickname");
    return loginState && !!uid && !!nickname;
}

// ========== 通用云端数据保存【核心】 ==========
/**
 * @param {string} tableName 数据表名
 * @param {object} saveData 要保存的字段数据
 * 规则：游客仅本地存储，登录用户自动上传对应数据表
 */
async function saveCloudData(tableName, saveData) {
    const userId = getUserId();
    const isLogin = isRealLoginUser();

    // 游客模式：仅存本地localStorage
    if (!isLogin || userId.startsWith("visitor_")) {
        localStorage.setItem(`local_data_${tableName}`, JSON.stringify(saveData));
        console.log(`📌 游客模式：${tableName} 数据本地保存完成`);
        return;
    }

    // 登录用户：存入对应云端数据表，自动绑定user_id
    const client = getSupabaseClient();
    if (!client) return;
    const submitData = { user_id: userId, ...saveData };

    try {
        const { error } = await client
            .from(tableName)
            .upsert([submitData], { onConflict: "user_id" });
        if (error) throw error;
        console.log(`✅ 云端保存成功 | 表：${tableName}`);
    } catch (err) {
        console.error(`❌ 云端保存失败 ${tableName}：`, err);
    }
}

// ========== 通用云端数据读取【核心】 ==========
/**
 * @param {string} tableName 数据表名
 * @returns {object|null} 读取到的数据
 */
async function getCloudData(tableName) {
    const userId = getUserId();
    const isLogin = isRealLoginUser();

    // 游客读取本地数据
    if (!isLogin || userId.startsWith("visitor_")) {
        const localStr = localStorage.getItem(`local_data_${tableName}`);
        return localStr ? JSON.parse(localStr) : null;
    }

    // 登录用户读取云端数据
    const client = getSupabaseClient();
    if (!client) return null;
    const { data, error } = await client
        .from(tableName)
        .select("*")
        .eq("user_id", userId)
        .single();

    return error ? null : data;
}

// ========== 登录退出工具方法 ==========
// 退出登录
function userLogout() {
    localStorage.removeItem("game_logged_in");
    localStorage.removeItem("game_user_id");
    localStorage.removeItem("game_nickname");
    location.reload();
}

// 清空所有游客本地缓存数据
function clearAllVisitorLocalData() {
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith("visitor_") || key.startsWith("local_data_")) {
            localStorage.removeItem(key);
        }
    });
}

// 页面加载初始化
window.addEventListener("load", () => {
    console.log("📦 通用公共工具库 common.js 加载完成");
});