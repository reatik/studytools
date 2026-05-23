# 刷好题题库数据参考

## 现有 grade 值
- `"中考难题"` - 中考难度题目（对应有 knowledge_point 字段，id 范围约 1-84）
- `"六年级下"` - 小学六年级下册（对应有 unit 字段，如 "U5"）
- `"五年级"` - 小学五年级
- `"四年级"` - 小学四年级
- `"小升初"` - 小升初衔接（id 为 C 前缀，如 "C428"）

## 现有 knowledge_point 值
- `"名词"` - 名词相关（可数/不可数、所有格、名词作定语等）
- `"代词"` - 代词相关（人称代词、物主代词、不定代词等）
- `"冠词"` - 冠词相关（a/an/the 用法）
- `"数词"` - 数词相关（基数词、序数词、量词等）
- `"形容词"` - 形容词相关
- `"副词"` - 副词相关
- `"动词"` - 动词相关
- `"固定搭配"` - 固定搭配
- `"介词"` - 介词相关（in/on/at 等，可新增）
- `"连词"` - 连词相关（and/but/because 等，可新增）
- `"时态"` - 时态相关（可新增）
- `"语态"` - 语态相关（可新增）
- `"从句"` - 从句相关（可新增）

## 现有 type 值
- `"选择"` - 选择题（有 options 数组，四选一）
- `"填空"` - 填空题（options 为空数组）
- `"句型转换"` - 句型转换题（少数）
- `"音标"` - 音标题（少数）

## 字段组合规则

### 中考难题 (grade = "中考难题")
必填字段：id, type, grade, knowledge_point, question, options, answer, meaning, explanation
可选字段：无

### 学校年级 (grade ∈ {"六年级下", "六年级上", "五年级", "四年级", "三年级"})
必填字段：id, type, grade, question, options, answer, meaning, explanation
可选字段：unit, knowledge_point

### 小升初 (grade = "小升初")
必填字段：id, type, grade, question, options, answer, meaning, explanation
id 格式：C 前缀 + 三位数字，如 "C431"

### 其他年级 (七年级/八年级等)
必填字段：id, type, grade, question, options, answer, meaning, explanation
可选字段：unit, knowledge_point

## meaning 字段编写规范
- **必填字段**，用中文翻译题目完整句意
- 选择题目：翻译正确选项对应的完整句子含义
- 填空题目：翻译填入正确答案后的完整句子含义
- 示例：`"汤姆，你应该多做锻炼。不要总是坐在书桌前忙着做你的练习题。"`

## id 编号规则
- 纯数字 id：从 1 起递增，当前最大为 105。新题目从 106 开始
- C 前缀 id：从 C001 起递增，当前最大为 C430。新题目从 C431 开始
- 根据新增题目的 grade 选择使用哪种 id 格式：
  - "中考难题" 或学校年级 → 纯数字 id
  - "小升初" → C 前缀 id
