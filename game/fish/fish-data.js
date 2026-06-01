// 钓鱼游戏 - 鱼类模板数据
// 总计: 100 条鱼 (35 Common + 28 Uncommon + 20 Rare + 12 Epic + 5 Legendary)

const FISH_TEMPLATES = [
  // ===================== COMMON (35条) =====================
  // scenes: ['lake','stream'], difficulty: 1-3, behavior: 'steady'
  { id: 'silver_minnow', name: '小银鱼', emoji: '🐟', rarity: 'common', baseSize: [0.1, 2], baseXP: [5, 8], baseVal: [3, 6], scenes: ['lake', 'stream'], difficulty: 1, behavior: 'steady', flavorText: '湖面下最寻常的身影，银光一闪即逝。' },
  { id: 'stream_crucian', name: '溪流鲫', emoji: '🐟', rarity: 'common', baseSize: [0.3, 2.5], baseXP: [5, 9], baseVal: [3, 7], scenes: ['lake', 'stream'], difficulty: 1, behavior: 'steady', flavorText: '小溪里最耐心的居民，静静地等待投喂。' },
  { id: 'grass_carp', name: '草鱼', emoji: '🐟', rarity: 'common', baseSize: [0.5, 3], baseXP: [6, 10], baseVal: [4, 8], scenes: ['lake', 'stream'], difficulty: 1, behavior: 'steady', flavorText: '水草丛中游弋，最爱啃食嫩绿的水草。' },
  { id: 'flower_bream', name: '花鲢', emoji: '🐟', rarity: 'common', baseSize: [0.4, 3.5], baseXP: [6, 10], baseVal: [3, 9], scenes: ['lake', 'stream'], difficulty: 2, behavior: 'steady', flavorText: '银色的鳞片上点缀着淡淡的花纹。' },
  { id: 'loach', name: '泥鳅', emoji: '🐡', rarity: 'common', baseSize: [0.1, 1.5], baseXP: [5, 7], baseVal: [3, 5], scenes: ['lake', 'stream'], difficulty: 1, behavior: 'steady', flavorText: '在泥底钻来钻去，滑溜溜的小家伙。' },
  { id: 'topmouth_gudgeon', name: '麦穗鱼', emoji: '🐟', rarity: 'common', baseSize: [0.2, 1], baseXP: [5, 7], baseVal: [3, 5], scenes: ['lake', 'stream'], difficulty: 1, behavior: 'steady', flavorText: '成群结队，像麦穗一样在浅水中摇曳。' },
  { id: 'sharpbelly', name: '餐条鱼', emoji: '🐟', rarity: 'common', baseSize: [0.2, 1.5], baseXP: [5, 8], baseVal: [3, 6], scenes: ['lake', 'stream'], difficulty: 1, behavior: 'steady', flavorText: '体侧扁薄如刀，游动时反射出耀眼的白光。' },
  { id: 'bitterling', name: '鳑鲏', emoji: '🐠', rarity: 'common', baseSize: [0.1, 1], baseXP: [5, 7], baseVal: [4, 7], scenes: ['lake', 'stream'], difficulty: 2, behavior: 'steady', flavorText: '繁殖季节会放射出绚丽的彩虹色，小巧而迷人。' },
  { id: 'gudgeon', name: '棒花鱼', emoji: '🐟', rarity: 'common', baseSize: [0.3, 2], baseXP: [6, 9], baseVal: [3, 7], scenes: ['lake', 'stream'], difficulty: 1, behavior: 'steady', flavorText: '趴在沙石上，背上斑驳的花纹是最好的伪装。' },
  { id: 'ricefish', name: '青鳉', emoji: '🐟', rarity: 'common', baseSize: [0.1, 0.8], baseXP: [5, 7], baseVal: [3, 5], scenes: ['lake', 'stream'], difficulty: 1, behavior: 'steady', flavorText: '水田和池塘的精灵，体型虽小却生命力顽强。' },
  { id: 'paradise_fish', name: '斗鱼', emoji: '🐠', rarity: 'common', baseSize: [0.2, 1.2], baseXP: [6, 9], baseVal: [4, 8], scenes: ['lake', 'stream'], difficulty: 2, behavior: 'steady', flavorText: '色彩斑斓，生性好斗，是水中的勇士。' },
  { id: 'yellow_catfish', name: '黄颡鱼', emoji: '🐡', rarity: 'common', baseSize: [0.5, 3], baseXP: [7, 12], baseVal: [5, 10], scenes: ['lake', 'stream'], difficulty: 2, behavior: 'steady', flavorText: '三根尖刺是它的武器，叫声嘎嘎作响。' },
  { id: 'sleeper_goby', name: '塘鳢', emoji: '🐟', rarity: 'common', baseSize: [0.3, 2], baseXP: [6, 10], baseVal: [4, 8], scenes: ['lake', 'stream'], difficulty: 2, behavior: 'steady', flavorText: '喜欢趴在石头上，一动不动的耐心猎手。' },
  { id: 'freshwater_goby', name: '虾虎鱼', emoji: '🐟', rarity: 'common', baseSize: [0.1, 1], baseXP: [5, 7], baseVal: [3, 6], scenes: ['lake', 'stream'], difficulty: 1, behavior: 'steady', flavorText: '腹鳍愈合成吸盘，牢牢吸附在石头上。' },
  { id: 'sunfish', name: '太阳鱼', emoji: '🐠', rarity: 'common', baseSize: [0.5, 2.5], baseXP: [7, 10], baseVal: [4, 9], scenes: ['lake', 'stream'], difficulty: 2, behavior: 'steady', flavorText: '在阳光下闪耀着蓝绿色的光芒。' },
  { id: 'pacu', name: '淡水白鲳', emoji: '🐟', rarity: 'common', baseSize: [1, 4], baseXP: [8, 12], baseVal: [5, 11], scenes: ['lake', 'stream'], difficulty: 2, behavior: 'steady', flavorText: '牙齿像人类一样整齐，以果实和坚果为食。' },
  { id: 'tilapia', name: '罗非鱼', emoji: '🐟', rarity: 'common', baseSize: [0.5, 3.5], baseXP: [7, 12], baseVal: [5, 10], scenes: ['lake', 'stream'], difficulty: 2, behavior: 'steady', flavorText: '适应力极强的热带鱼，几乎任何水域都能生存。' },
  { id: 'chinese_hooksnout', name: '马口鱼', emoji: '🐟', rarity: 'common', baseSize: [0.3, 2], baseXP: [6, 10], baseVal: [4, 8], scenes: ['stream'], difficulty: 2, behavior: 'steady', flavorText: '嘴边有一道独特的缺口，是溪流中的顶级小掠食者。' },
  { id: 'widefin_minnow', name: '宽鳍鱲', emoji: '🐠', rarity: 'common', baseSize: [0.2, 1.8], baseXP: [6, 9], baseVal: [4, 8], scenes: ['stream'], difficulty: 2, behavior: 'steady', flavorText: '繁殖季节的雄性浑身散发金属般的光泽。' },
  { id: 'chinese_golden_loach', name: '华鳈', emoji: '🐟', rarity: 'common', baseSize: [0.2, 1.5], baseXP: [6, 9], baseVal: [4, 7], scenes: ['stream'], difficulty: 2, behavior: 'steady', flavorText: '体侧的金色线条在阳光下若隐若现。' },
  { id: 'spotted_steed', name: '花䱻', emoji: '🐟', rarity: 'common', baseSize: [0.4, 3], baseXP: [7, 11], baseVal: [5, 10], scenes: ['lake', 'stream'], difficulty: 2, behavior: 'steady', flavorText: '黑色的斑点散布全身，宛如繁星点点。' },
  { id: 'snake_gudgeon', name: '蛇鮈', emoji: '🐟', rarity: 'common', baseSize: [0.3, 2.5], baseXP: [6, 10], baseVal: [4, 8], scenes: ['lake', 'stream'], difficulty: 2, behavior: 'steady', flavorText: '身体细长如蛇，在石缝间穿行。' },
  { id: 'false_gudgeon', name: '似鮈', emoji: '🐟', rarity: 'common', baseSize: [0.2, 1.5], baseXP: [5, 8], baseVal: [3, 7], scenes: ['stream'], difficulty: 1, behavior: 'steady', flavorText: '与棒花鱼极为相似，但唇部构造不同。' },
  { id: 'blackfin_gudgeon', name: '黑鳍鳈', emoji: '🐟', rarity: 'common', baseSize: [0.2, 1.8], baseXP: [6, 9], baseVal: [4, 7], scenes: ['stream'], difficulty: 2, behavior: 'steady', flavorText: '鳍条边缘的黑色条纹是它独特的标志。' },
  { id: 'dwarf_gudgeon', name: '小鳈', emoji: '🐟', rarity: 'common', baseSize: [0.1, 0.8], baseXP: [5, 7], baseVal: [3, 5], scenes: ['stream'], difficulty: 1, behavior: 'steady', flavorText: '最小的鳈鱼之一，栖息在清澈的溪流中。' },
  { id: 'longsnout_chub', name: '长吻鱥', emoji: '🐟', rarity: 'common', baseSize: [0.2, 1.5], baseXP: [6, 9], baseVal: [3, 7], scenes: ['stream'], difficulty: 2, behavior: 'steady', flavorText: '尖长的吻部帮助它在水底翻找食物。' },
  { id: 'lin_dace', name: '林氏细鲫', emoji: '🐟', rarity: 'common', baseSize: [0.1, 1], baseXP: [5, 7], baseVal: [3, 5], scenes: ['stream'], difficulty: 1, behavior: 'steady', flavorText: '极小的体形让它能在最浅的水流中生活。' },
  { id: 'striped_barb', name: '条纹小鲃', emoji: '🐠', rarity: 'common', baseSize: [0.2, 1.2], baseXP: [6, 9], baseVal: [4, 8], scenes: ['stream'], difficulty: 2, behavior: 'steady', flavorText: '体侧四条黑色纵纹清晰可见，活泼好动。' },
  { id: 'variegated_barb', name: '异纹小鲃', emoji: '🐠', rarity: 'common', baseSize: [0.2, 1], baseXP: [5, 9], baseVal: [4, 7], scenes: ['stream'], difficulty: 2, behavior: 'steady', flavorText: '花纹变化多端，每一条都独一无二。' },
  { id: 'acrossocheilus', name: '光唇鱼', emoji: '🐟', rarity: 'common', baseSize: [0.3, 2], baseXP: [7, 10], baseVal: [4, 9], scenes: ['stream'], difficulty: 2, behavior: 'steady', flavorText: '下唇特化为刮食器，能啃食石头上的藻类。' },
  { id: 'white_snout_barb', name: '白甲鱼', emoji: '🐟', rarity: 'common', baseSize: [0.5, 3.5], baseXP: [7, 12], baseVal: [5, 10], scenes: ['stream'], difficulty: 2, behavior: 'steady', flavorText: '体型较大，是溪流中的优雅绅士。' },
  { id: 'springfish', name: '泉水鱼', emoji: '🐟', rarity: 'common', baseSize: [0.3, 2], baseXP: [6, 10], baseVal: [4, 8], scenes: ['stream'], difficulty: 2, behavior: 'steady', flavorText: '只在最清澈的泉水中出现，水质不好的地方绝迹。' },
  { id: 'lip_gudgeon', name: '唇䱻', emoji: '🐟', rarity: 'common', baseSize: [0.4, 3], baseXP: [7, 11], baseVal: [5, 9], scenes: ['lake', 'stream'], difficulty: 2, behavior: 'steady', flavorText: '肉质厚实的嘴唇是它最显著的特征。' },
  { id: 'copper_fish', name: '铜鱼', emoji: '🐟', rarity: 'common', baseSize: [0.5, 3], baseXP: [8, 13], baseVal: [6, 12], scenes: ['lake', 'stream'], difficulty: 3, behavior: 'steady', flavorText: '鳞片泛着古铜色的光泽，沉稳而古老。' },
  { id: 'redeye_chub', name: '赤眼鳟', emoji: '🐟', rarity: 'common', baseSize: [0.5, 4], baseXP: [8, 14], baseVal: [5, 13], scenes: ['lake', 'stream'], difficulty: 3, behavior: 'steady', flavorText: '眼睛上缘有一抹鲜红，像是涂了胭脂。' },

  // ===================== UNCOMMON (28条) =====================
  // scenes: ['lake','stream','bay'], difficulty: 2-5, behavior: 'sprint'
  { id: 'green_crab', name: '青蟹', emoji: '🦀', rarity: 'uncommon', baseSize: [0.5, 5], baseXP: [15, 22], baseVal: [18, 28], scenes: ['lake', 'stream', 'bay'], difficulty: 3, behavior: 'sprint', flavorText: '挥舞着大钳子横行霸道，肉质鲜美无比。' },
  { id: 'grouper', name: '石斑鱼', emoji: '🐟', rarity: 'uncommon', baseSize: [1, 6], baseXP: [18, 28], baseVal: [20, 35], scenes: ['lake', 'bay'], difficulty: 4, behavior: 'sprint', flavorText: '岩石间的潜伏者，花纹与岩石融为一体。' },
  { id: 'river_eel', name: '河鳗', emoji: '🐡', rarity: 'uncommon', baseSize: [0.5, 7], baseXP: [16, 28], baseVal: [18, 32], scenes: ['lake', 'stream', 'bay'], difficulty: 4, behavior: 'sprint', flavorText: '身材修长如蛇，滑不留手的逃脱大师。' },
  { id: 'snakehead', name: '黑鱼', emoji: '🐟', rarity: 'uncommon', baseSize: [1, 7], baseXP: [20, 32], baseVal: [22, 38], scenes: ['lake', 'stream', 'bay'], difficulty: 5, behavior: 'sprint', flavorText: '凶猛的掠食者，能直接呼吸空气，离水也能存活。' },
  { id: 'catfish', name: '鲶鱼', emoji: '🐡', rarity: 'uncommon', baseSize: [1.5, 8], baseXP: [18, 30], baseVal: [20, 35], scenes: ['lake', 'stream', 'bay'], difficulty: 4, behavior: 'sprint', flavorText: '夜间活动的巨兽，两根长须在水中探测一切。' },
  { id: 'mandarin_fish', name: '鳜鱼', emoji: '🐟', rarity: 'uncommon', baseSize: [1, 5], baseXP: [22, 34], baseVal: [25, 40], scenes: ['lake', 'stream', 'bay'], difficulty: 5, behavior: 'sprint', flavorText: '桃花流水鳜鱼肥，肉质细嫩被誉为淡水鱼之王。' },
  { id: 'rice_eel', name: '黄鳝', emoji: '🐡', rarity: 'uncommon', baseSize: [0.5, 6], baseXP: [16, 26], baseVal: [18, 30], scenes: ['lake', 'stream'], difficulty: 3, behavior: 'sprint', flavorText: '稻田里的长条居民，能在泥中掘洞生存。' },
  { id: 'rainbow_trout', name: '虹鳟', emoji: '🐟', rarity: 'uncommon', baseSize: [0.8, 5], baseXP: [20, 30], baseVal: [22, 35], scenes: ['stream', 'bay'], difficulty: 4, behavior: 'sprint', flavorText: '体侧那一抹彩虹般的光泽，是大自然最绚丽的杰作。' },
  { id: 'perch', name: '鲈鱼', emoji: '🐟', rarity: 'uncommon', baseSize: [1, 5.5], baseXP: [18, 30], baseVal: [20, 36], scenes: ['lake', 'bay'], difficulty: 3, behavior: 'sprint', flavorText: '江上往来人，但爱鲈鱼美。千年来文人墨客的挚爱。' },
  { id: 'pikeperch', name: '梭鲈', emoji: '🐟', rarity: 'uncommon', baseSize: [1.5, 6], baseXP: [20, 32], baseVal: [22, 38], scenes: ['lake', 'bay'], difficulty: 4, behavior: 'sprint', flavorText: '牙齿锋利，身形如梭，是高效的猎手。' },
  { id: 'largemouth_bass', name: '加州鲈', emoji: '🐟', rarity: 'uncommon', baseSize: [1.5, 6], baseXP: [20, 32], baseVal: [22, 38], scenes: ['lake', 'bay'], difficulty: 4, behavior: 'sprint', flavorText: '攻击欲望极强，见饵就咬，钓鱼人的最爱。' },
  { id: 'blotched_snakehead', name: '斑鳢', emoji: '🐟', rarity: 'uncommon', baseSize: [1, 6.5], baseXP: [18, 30], baseVal: [20, 35], scenes: ['lake', 'stream'], difficulty: 4, behavior: 'sprint', flavorText: '与黑鱼近亲，斑纹更加明显绚丽。' },
  { id: 'moon_snakehead', name: '月鳢', emoji: '🐟', rarity: 'uncommon', baseSize: [0.8, 5], baseXP: [17, 28], baseVal: [18, 32], scenes: ['lake', 'stream'], difficulty: 3, behavior: 'sprint', flavorText: '尾鳍基部有一个酷似月亮的圆形斑纹。' },
  { id: 'dusky_sleeper', name: '沙塘鳢', emoji: '🐟', rarity: 'uncommon', baseSize: [0.5, 4], baseXP: [16, 26], baseVal: [18, 30], scenes: ['lake', 'bay'], difficulty: 3, behavior: 'sprint', flavorText: '肉质极为鲜嫩，是江南人最爱的河鲜之一。' },
  { id: 'yellowcheek', name: '鳡鱼', emoji: '🐟', rarity: 'uncommon', baseSize: [2, 8], baseXP: [22, 34], baseVal: [24, 38], scenes: ['lake', 'stream', 'bay'], difficulty: 5, behavior: 'sprint', flavorText: '淡水中的鲨鱼，速度飞快，力量惊人。' },
  { id: 'topmouth_culter', name: '翘嘴鲌', emoji: '🐟', rarity: 'uncommon', baseSize: [1, 6], baseXP: [20, 32], baseVal: [22, 36], scenes: ['lake', 'stream', 'bay'], difficulty: 4, behavior: 'sprint', flavorText: '向上翘起的嘴巴是它最明显的特征，以小鱼为食。' },
  { id: 'mongolian_redfin', name: '蒙古红鲌', emoji: '🐟', rarity: 'uncommon', baseSize: [1, 5.5], baseXP: [18, 30], baseVal: [20, 34], scenes: ['lake', 'stream', 'bay'], difficulty: 4, behavior: 'sprint', flavorText: '尾鳍和臀鳍呈现鲜艳的橙红色。' },
  { id: 'bigeye_mandarin', name: '大眼鳜', emoji: '🐟', rarity: 'uncommon', baseSize: [0.8, 4.5], baseXP: [18, 30], baseVal: [22, 36], scenes: ['lake', 'stream'], difficulty: 4, behavior: 'sprint', flavorText: '双眼突出，在昏暗的水中视力极佳。' },
  { id: 'ripple_mandarin', name: '波纹鳜', emoji: '🐟', rarity: 'uncommon', baseSize: [0.8, 4], baseXP: [17, 28], baseVal: [20, 34], scenes: ['lake', 'stream'], difficulty: 3, behavior: 'sprint', flavorText: '身上的波纹图案如水波荡漾，极具美感。' },
  { id: 'longbody_mandarin', name: '长身鳜', emoji: '🐟', rarity: 'uncommon', baseSize: [0.8, 5], baseXP: [18, 30], baseVal: [22, 36], scenes: ['lake', 'stream'], difficulty: 4, behavior: 'sprint', flavorText: '身体比一般鳜鱼更加修长，游泳速度更快。' },
  { id: 'aulopus', name: '鳌花鱼', emoji: '🐟', rarity: 'uncommon', baseSize: [0.8, 4.5], baseXP: [20, 32], baseVal: [24, 38], scenes: ['lake', 'stream', 'bay'], difficulty: 4, behavior: 'sprint', flavorText: '与鳜鱼齐名的美味，桃花盛开时最肥美。' },
  { id: 'silver_xenocypris', name: '银鲴', emoji: '🐟', rarity: 'uncommon', baseSize: [0.5, 4], baseXP: [16, 26], baseVal: [16, 28], scenes: ['lake', 'stream', 'bay'], difficulty: 3, behavior: 'sprint', flavorText: '全身银白，游动时反射出耀眼的金属光泽。' },
  { id: 'yellowtail_xenocypris', name: '黄尾鲴', emoji: '🐟', rarity: 'uncommon', baseSize: [0.5, 4], baseXP: [16, 26], baseVal: [16, 28], scenes: ['lake', 'stream', 'bay'], difficulty: 3, behavior: 'sprint', flavorText: '尾鳍末端呈现出独特的金黄色。' },
  { id: 'acheilognathus', name: '鱊鱼', emoji: '🐠', rarity: 'uncommon', baseSize: [0.3, 1.5], baseXP: [15, 22], baseVal: [15, 25], scenes: ['lake', 'stream'], difficulty: 2, behavior: 'sprint', flavorText: '精致的彩色小鱼，闪耀着珍珠般的光泽。' },
  { id: 'spiny_eel', name: '刺鳅', emoji: '🐡', rarity: 'uncommon', baseSize: [0.5, 4.5], baseXP: [17, 26], baseVal: [18, 30], scenes: ['lake', 'stream', 'bay'], difficulty: 3, behavior: 'sprint', flavorText: '背鳍前方有一排尖锐的小刺，是它的防御武器。' },
  { id: 'knife_eel', name: '刀鳅', emoji: '🐡', rarity: 'uncommon', baseSize: [0.5, 5], baseXP: [18, 28], baseVal: [20, 32], scenes: ['lake', 'stream', 'bay'], difficulty: 3, behavior: 'sprint', flavorText: '身体像一把弯刀，是水中的功夫高手。' },
  { id: 'chinese_spiny_eel', name: '中华刺鳅', emoji: '🐡', rarity: 'uncommon', baseSize: [0.5, 4], baseXP: [17, 28], baseVal: [18, 30], scenes: ['lake', 'stream', 'bay'], difficulty: 3, behavior: 'sprint', flavorText: '中国特有的刺鳅品种，花纹更加精美。' },
  { id: 'chinese_sucker', name: '胭脂鱼', emoji: '🐠', rarity: 'uncommon', baseSize: [1.5, 7], baseXP: [22, 34], baseVal: [25, 40], scenes: ['lake', 'stream', 'bay'], difficulty: 5, behavior: 'sprint', flavorText: '成年后体色如胭脂般艳丽，有"亚洲美人"之称。' },

  // ===================== RARE (20条) =====================
  // scenes: ['stream','bay','pool'], difficulty: 4-7, behavior: 'sine'
  { id: 'octopus', name: '章鱼', emoji: '🐙', rarity: 'rare', baseSize: [2, 12], baseXP: [50, 85], baseVal: [65, 125], scenes: ['bay', 'pool'], difficulty: 6, behavior: 'sine', flavorText: '八条触手灵活无比，是最聪明的无脊椎动物。' },
  { id: 'tiger_shark', name: '虎鲨', emoji: '🦈', rarity: 'rare', baseSize: [3, 14], baseXP: [60, 95], baseVal: [80, 140], scenes: ['bay', 'pool'], difficulty: 7, behavior: 'sine', flavorText: '身上如虎纹般的条纹是它名字的由来，凶猛无畏。' },
  { id: 'manta_ray', name: '魔鬼鱼', emoji: '🐟', rarity: 'rare', baseSize: [3, 15], baseXP: [55, 90], baseVal: [75, 145], scenes: ['bay', 'pool'], difficulty: 7, behavior: 'sine', flavorText: '展开宽大的胸鳍在水中滑翔，宛如一只黑色的风筝。' },
  { id: 'sea_turtle', name: '海龟', emoji: '🐟', rarity: 'rare', baseSize: [5, 14], baseXP: [50, 80], baseVal: [70, 130], scenes: ['bay', 'pool'], difficulty: 5, behavior: 'sine', flavorText: '穿越了亿万年的时光，是海洋中的长寿智者。' },
  { id: 'golden_arowana', name: '金龙', emoji: '🐟', rarity: 'rare', baseSize: [2, 10], baseXP: [70, 100], baseVal: [100, 150], scenes: ['pool'], difficulty: 7, behavior: 'sine', flavorText: '闪耀着金色光芒的远古鱼类，被视为祥瑞的象征。' },
  { id: 'silver_arowana', name: '银龙', emoji: '🐟', rarity: 'rare', baseSize: [2, 10], baseXP: [65, 95], baseVal: [90, 140], scenes: ['pool'], difficulty: 7, behavior: 'sine', flavorText: '银白如镜的身体在水中缓缓游动，姿态优雅。' },
  { id: 'peacock_bass', name: '皇冠三间', emoji: '🐟', rarity: 'rare', baseSize: [2, 10], baseXP: [60, 90], baseVal: [80, 130], scenes: ['stream', 'bay', 'pool'], difficulty: 6, behavior: 'sine', flavorText: '尾柄上三个黑色圆斑如同皇冠上的宝石。' },
  { id: 'bahia_bass', name: '巴西亚', emoji: '🐟', rarity: 'rare', baseSize: [1.5, 8], baseXP: [55, 85], baseVal: [75, 125], scenes: ['stream', 'bay', 'pool'], difficulty: 6, behavior: 'sine', flavorText: '金灿灿的身体上撒满了金色的碎点。' },
  { id: 'emperor_cichlid', name: '帝王三间', emoji: '🐟', rarity: 'rare', baseSize: [2, 12], baseXP: [65, 95], baseVal: [85, 140], scenes: ['stream', 'bay', 'pool'], difficulty: 6, behavior: 'sine', flavorText: '气场强大的大型慈鲷，名副其实的水中帝王。' },
  { id: 'arapaima', name: '巨骨舌鱼', emoji: '🐟', rarity: 'rare', baseSize: [5, 15], baseXP: [80, 100], baseVal: [100, 150], scenes: ['pool'], difficulty: 7, behavior: 'sine', flavorText: '世界上最大的淡水鱼之一，鳞片坚硬如铠甲。' },
  { id: 'red_arowana', name: '红龙鱼', emoji: '🐠', rarity: 'rare', baseSize: [1.5, 8], baseXP: [75, 100], baseVal: [110, 150], scenes: ['pool'], difficulty: 7, behavior: 'sine', flavorText: '通体鲜红如火，是龙鱼中的极品王者。' },
  { id: 'crossback_golden', name: '过背金龙', emoji: '🐟', rarity: 'rare', baseSize: [1.5, 9], baseXP: [75, 100], baseVal: [105, 150], scenes: ['pool'], difficulty: 7, behavior: 'sine', flavorText: '金色鳞片越过背部最顶部的一排，品相顶级。' },
  { id: 'snow_arowana', name: '雪龙', emoji: '🐟', rarity: 'rare', baseSize: [1.5, 8], baseXP: [80, 100], baseVal: [115, 150], scenes: ['pool'], difficulty: 7, behavior: 'sine', flavorText: '通体银白如雪，是一种极为罕见的白化变异。' },
  { id: 'thai_tiger_fish', name: '泰国虎鱼', emoji: '🐟', rarity: 'rare', baseSize: [2, 9], baseXP: [55, 85], baseVal: [70, 120], scenes: ['stream', 'bay', 'pool'], difficulty: 5, behavior: 'sine', flavorText: '黑黄相间的条纹是对称均匀，如猛虎般威风。' },
  { id: 'indonesian_tiger_fish', name: '印尼虎鱼', emoji: '🐟', rarity: 'rare', baseSize: [2, 8], baseXP: [50, 80], baseVal: [65, 115], scenes: ['stream', 'bay', 'pool'], difficulty: 5, behavior: 'sine', flavorText: '条纹不如泰国虎鱼规则，但也颇有野性之美。' },
  { id: 'threestripe_tiger', name: '三纹虎', emoji: '🐟', rarity: 'rare', baseSize: [1.5, 7], baseXP: [55, 85], baseVal: [75, 125], scenes: ['stream', 'bay', 'pool'], difficulty: 5, behavior: 'sine', flavorText: '身上三条黑色纹路均匀分布，品相极佳。' },
  { id: 'pearl_stingray', name: '珍珠魟', emoji: '🐡', rarity: 'rare', baseSize: [3, 13], baseXP: [60, 90], baseVal: [80, 135], scenes: ['bay', 'pool'], difficulty: 6, behavior: 'sine', flavorText: '圆盘般的身体上点缀着珍珠般的小斑点。' },
  { id: 'flower_stingray', name: '梅花魟', emoji: '🐡', rarity: 'rare', baseSize: [3, 12], baseXP: [60, 90], baseVal: [85, 140], scenes: ['bay', 'pool'], difficulty: 6, behavior: 'sine', flavorText: '花纹如寒梅绽放，是魟鱼中花纹最美的品种。' },
  { id: 'royal_pleco', name: '皇冠豹', emoji: '🐟', rarity: 'rare', baseSize: [2, 9], baseXP: [50, 80], baseVal: [65, 115], scenes: ['stream', 'bay', 'pool'], difficulty: 5, behavior: 'sine', flavorText: '头部隆起的肉冠是它的标志，异型鱼中的王者。' },
  { id: 'blue_eye_pleco', name: '蓝眼皇冠豹', emoji: '🐟', rarity: 'rare', baseSize: [2, 8], baseXP: [55, 85], baseVal: [70, 120], scenes: ['stream', 'bay', 'pool'], difficulty: 5, behavior: 'sine', flavorText: '一双湛蓝色的眼睛格外迷人，令人沉醉。' },

  // ===================== EPIC (12条) =====================
  // scenes: ['bay','pool'], difficulty: 6-9, behavior: 'erratic'
  { id: 'giant_squid', name: '大王乌贼', emoji: '🦑', rarity: 'epic', baseSize: [10, 28], baseXP: [200, 300], baseVal: [350, 500], scenes: ['bay', 'pool'], difficulty: 8, behavior: 'erratic', flavorText: '深海传说中最神秘的存在，与抹香鲸在深渊中搏斗。' },
  { id: 'sperm_whale', name: '抹香鲸', emoji: '🐋', rarity: 'epic', baseSize: [15, 30], baseXP: [220, 300], baseVal: [380, 500], scenes: ['bay', 'pool'], difficulty: 9, behavior: 'erratic', flavorText: '深潜能力最强的鲸类，能潜入两千米以下的深渊。' },
  { id: 'oarfish', name: '深海皇带鱼', emoji: '🐟', rarity: 'epic', baseSize: [8, 25], baseXP: [180, 280], baseVal: [300, 450], scenes: ['pool'], difficulty: 8, behavior: 'erratic', flavorText: '身体细长如银色丝带，古人认为是龙宫的使者。' },
  { id: 'megamouth_shark', name: '巨口鲨', emoji: '🦈', rarity: 'epic', baseSize: [10, 25], baseXP: [160, 250], baseVal: [280, 420], scenes: ['bay', 'pool'], difficulty: 7, behavior: 'erratic', flavorText: '巨大的嘴巴张开如深渊，以滤食浮游生物为生。' },
  { id: 'manta_king', name: '蝠鲼之王', emoji: '🐟', rarity: 'epic', baseSize: [12, 28], baseXP: [180, 280], baseVal: [320, 480], scenes: ['bay', 'pool'], difficulty: 8, behavior: 'erratic', flavorText: '翼展能达七米，跃出水面如飞鸟般壮观。' },
  { id: 'swordfish', name: '剑鱼', emoji: '🐟', rarity: 'epic', baseSize: [8, 24], baseXP: [170, 260], baseVal: [280, 430], scenes: ['bay', 'pool'], difficulty: 8, behavior: 'erratic', flavorText: '上颌延长如利剑，能以闪电般的速度刺穿猎物。' },
  { id: 'sailfish', name: '旗鱼', emoji: '🐟', rarity: 'epic', baseSize: [7, 22], baseXP: [180, 270], baseVal: [300, 450], scenes: ['bay', 'pool'], difficulty: 9, behavior: 'erratic', flavorText: '时速可达110公里，是海洋中最快的猎手。' },
  { id: 'blue_marlin', name: '蓝马林', emoji: '🐟', rarity: 'epic', baseSize: [8, 25], baseXP: [190, 290], baseVal: [320, 480], scenes: ['bay', 'pool'], difficulty: 9, behavior: 'erratic', flavorText: '背上闪耀着电光蓝的条纹，海明威笔下的传奇。' },
  { id: 'sunfish_king', name: '翻车鱼王', emoji: '🐡', rarity: 'epic', baseSize: [10, 28], baseXP: [140, 220], baseVal: [220, 360], scenes: ['bay', 'pool'], difficulty: 6, behavior: 'erratic', flavorText: '扁平如碟的巨型怪鱼，躺在海面上晒太阳。' },
  { id: 'anglerfish', name: '深海鮟鱇', emoji: '🐟', rarity: 'epic', baseSize: [5, 15], baseXP: [150, 240], baseVal: [250, 400], scenes: ['pool'], difficulty: 8, behavior: 'erratic', flavorText: '头顶上发光的诱饵在黑暗中闪烁，引诱无知的小鱼。' },
  { id: 'lanternfish_king', name: '灯笼鱼王', emoji: '🐟', rarity: 'epic', baseSize: [6, 18], baseXP: [160, 250], baseVal: [260, 410], scenes: ['pool'], difficulty: 8, behavior: 'erratic', flavorText: '全身布满发光器，在深海中如移动的星空。' },
  { id: 'mosasaurus', name: '沧龙', emoji: '🐋', rarity: 'epic', baseSize: [18, 30], baseXP: [240, 300], baseVal: [400, 500], scenes: ['bay', 'pool'], difficulty: 9, behavior: 'erratic', flavorText: '白垩纪海洋的终极霸主，据说在深海中仍有幸存者。' },

  // ===================== LEGENDARY (5条) =====================
  // scenes: ['pool'], difficulty: 8-10, behavior: 'random'
  { id: 'kingfish', name: '传说鱼王', emoji: '👑', rarity: 'legendary', baseSize: [30, 100], baseXP: [3000, 5000], baseVal: [9999, 9999], scenes: ['pool'], difficulty: 10, behavior: 'random', flavorText: '从远古时代存活至今的鱼中帝王，传说它的鳞片都是纯金打造。' },
  { id: 'goldendragon', name: '金龙鱼', emoji: '🐉', rarity: 'legendary', baseSize: [15, 40], baseXP: [1000, 2000], baseVal: [2000, 4000], scenes: ['pool'], difficulty: 9, behavior: 'random', flavorText: '浑身散发着金色祥光的神话生物，相传能呼风唤雨。' },
  { id: 'moonwhale', name: '月光鲸', emoji: '🐳', rarity: 'legendary', baseSize: [20, 60], baseXP: [1500, 3000], baseVal: [2500, 5000], scenes: ['pool'], difficulty: 9, behavior: 'random', flavorText: '只在满月之夜浮出水面，鲸身散发着柔和的月光。' },
  { id: 'starsea', name: '星海精灵', emoji: '✨', rarity: 'legendary', baseSize: [8, 20], baseXP: [800, 1500], baseVal: [1500, 3000], scenes: ['pool'], difficulty: 8, behavior: 'random', flavorText: '身体透明如水晶，体内闪烁着银河般的点点星光。' },
  { id: 'ancientcarp', name: '千年古鲤', emoji: '🐟', rarity: 'legendary', baseSize: [25, 50], baseXP: [2000, 3500], baseVal: [3000, 6000], scenes: ['pool'], difficulty: 8, behavior: 'random', flavorText: '修行千年的古鲤，据说越过龙门便可化身为龙。' },
];

// 按稀有度分类的辅助查询
const FISH_BY_RARITY = {
  common: FISH_TEMPLATES.filter(f => f.rarity === 'common'),
  uncommon: FISH_TEMPLATES.filter(f => f.rarity === 'uncommon'),
  rare: FISH_TEMPLATES.filter(f => f.rarity === 'rare'),
  epic: FISH_TEMPLATES.filter(f => f.rarity === 'epic'),
  legendary: FISH_TEMPLATES.filter(f => f.rarity === 'legendary'),
};

// 按场景分类的辅助查询
const FISH_BY_SCENE = {
  lake: FISH_TEMPLATES.filter(f => f.scenes.includes('lake')),
  stream: FISH_TEMPLATES.filter(f => f.scenes.includes('stream')),
  bay: FISH_TEMPLATES.filter(f => f.scenes.includes('bay')),
  pool: FISH_TEMPLATES.filter(f => f.scenes.includes('pool')),
};

// 按行为分类的辅助查询
const FISH_BY_BEHAVIOR = {
  steady: FISH_TEMPLATES.filter(f => f.behavior === 'steady'),
  sprint: FISH_TEMPLATES.filter(f => f.behavior === 'sprint'),
  sine: FISH_TEMPLATES.filter(f => f.behavior === 'sine'),
  erratic: FISH_TEMPLATES.filter(f => f.behavior === 'erratic'),
  random: FISH_TEMPLATES.filter(f => f.behavior === 'random'),
};

// CommonJS 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FISH_TEMPLATES, FISH_BY_RARITY, FISH_BY_SCENE, FISH_BY_BEHAVIOR };
}
