// sentences.js
// 所有题目数据

const sentenceBank = [
    // ===== 陈述句（基础）=====
    {
        text: "{Tom} usually ______ basketball every day.",
        options: [
            { label: "A", value: "play", correct: false },
            { label: "B", value: "plays", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{She} ______ to school by bike.",
        options: [
            { label: "A", value: "go", correct: false },
            { label: "B", value: "goes", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{My mother} ______ a cake for me.",
        options: [
            { label: "A", value: "make", correct: false },
            { label: "B", value: "makes", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{The boy} ______ a kite in the park.",
        options: [
            { label: "A", value: "fly", correct: false },
            { label: "B", value: "flies", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Lucy} ______ her hair every morning.",
        options: [
            { label: "A", value: "wash", correct: false },
            { label: "B", value: "washes", correct: true }
        ],
        difficulty: "陈述"
    },

    // ===== 陈述句（进阶）=====
    {
        text: "{Everyone} in my class ______ very hard.",
        options: [
            { label: "A", value: "study", correct: false },
            { label: "B", value: "studies", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Nobody} ______ to be late for school.",
        options: [
            { label: "A", value: "want", correct: false },
            { label: "B", value: "wants", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{One of my friends} ______ in Beijing now.",
        options: [
            { label: "A", value: "live", correct: false },
            { label: "B", value: "lives", correct: true }
        ],
        difficulty: "陈述"
    },

    // ===== 否定句 =====
    {
        text: "{He} ______ like playing football.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{They} ______ go to school on Sunday.",
        options: [
            { label: "A", value: "doesn't", correct: false },
            { label: "B", value: "don't", correct: true }
        ],
        difficulty: "否定"
    },

    // ===== 一般疑问句 =====
    {
        text: "______ {she} often watch TV?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your brother} like apples?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },

    // ===== 特殊疑问句 =====
    {
        text: "What ______ {Kitty} usually eat for lunch?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {Danny} play football?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {your aunt} go to the market?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What time ______ {Mr Wang} start(开始) work?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {my grandfather} like reading?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {their son} go to school?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {your best friend} live?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the tiger} like to eat?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the parrot} talk?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {the snail} sleep?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the library} have inside?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {this robot} move?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the bread} smell?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the lemon} taste?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the pupils} learn at school?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the women} go to work?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {many birds} fly?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the boys} play in the garden?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {these flowers} grow?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {the students} sit in class?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {Joe} usually do on weekends?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {Tom and his cousin} play basketball?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the little dog} cross the road?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the lovely parrots} like doing?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {Aunt Liu} go to the supermarket?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {you and your friend} read books?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the small duck} like eating?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {those bees} fly around the flowers?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {Paul} do his homework?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {your grandma} like for breakfast?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {we} have our PE class?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {Amy and Jane} go to school together?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the cute giraffe} eat every day?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {the boys} play after class?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {Uncle Wang} work every day?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {this lovely puppy} like to play?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {the pupils} run on the playground?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {those ducks} like doing in the lake?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {Jack} meet his good friend?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {Sally} drink in the morning?",
        options: [
            { "label": "A", "value": "do", "correct": false },
            { "label": "B", "value": "does", "correct": true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {Ben} fly his model plane(模型飞机)?",
        options: [
            { "label": "A", "value": "do", "correct": false },
            { "label": "B", "value": "does", "correct": true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "When ______ {your uncle} go to his office?",
        options: [
            { "label": "A", "value": "do", "correct": false },
            { "label": "B", "value": "does", "correct": true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What time ______ {Miss Li} have her breakfast?",
        options: [
            { "label": "A", "value": "do", "correct": false },
            { "label": "B", "value": "does", "correct": true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {your cousin} like to draw?",
        options: [
            { "label": "A", "value": "do", "correct": false },
            { "label": "B", "value": "does", "correct": true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the little hamster(仓鼠)} run in the cage（笼子）?",
        options: [
            { "label": "A", "value": "do", "correct": false },
            { "label": "B", "value": "does", "correct": true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {the bear} sleep in winter?",
        options: [
            { "label": "A", "value": "do", "correct": false },
            { "label": "B", "value": "does", "correct": true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the shop} sell in it?",
        options: [
            { "label": "A", "value": "do", "correct": false },
            { "label": "B", "value": "does", "correct": true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {this toy car} run on the floor?",
        options: [
            { "label": "A", "value": "do", "correct": false },
            { "label": "B", "value": "does", "correct": true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the watermelon} taste?",
        options: [
            { "label": "A", "value": "do", "correct": false },
            { "label": "B", "value": "does", "correct": true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {it} taste?",
        options: [
            { "label": "A", "value": "do", "correct": false },
            { "label": "B", "value": "does", "correct": true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the teachers} do in the office?",
        options: [
            { "label": "A", "value": "do", "correct": true },
            { "label": "B", "value": "does", "correct": false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the children} go to the park?",
        options: [
            { "label": "A", "value": "do", "correct": true },
            { "label": "B", "value": "does", "correct": false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {two rabbits} play on the grass?",
        options: [
            { "label": "A", "value": "do", "correct": true },
            { "label": "B", "value": "does", "correct": false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the girls} skip in the playground?",
        options: [
            { "label": "A", "value": "do", "correct": true },
            { "label": "B", "value": "does", "correct": false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What colour ______ {Alice and Kitty} like?",
        options: [
            { "label": "A", "value": "do", "correct": true },
            { "label": "B", "value": "does", "correct": false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {many ducks} swim in the river?",
        options: [
            { "label": "A", "value": "do", "correct": true },
            { "label": "B", "value": "does", "correct": false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {Lucy and Lily} like to collect（收集）?",
        options: [
            { "label": "A", "value": "do", "correct": true },
            { "label": "B", "value": "does", "correct": false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {you and your father} go hiking（徒步）?",
        options: [
            { "label": "A", "value": "do", "correct": true },
            { "label": "B", "value": "does", "correct": false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {they} do after school every day?",
        options: [
            { "label": "A", "value": "do", "correct": true },
            { "label": "B", "value": "does", "correct": false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {we} visit next Sunday?",
        options: [
            { "label": "A", "value": "do", "correct": true },
            { "label": "B", "value": "does", "correct": false }
        ],
        difficulty: "特殊疑问"
    },    
    {
        text: "Where ______ {the children} play on the swing?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the orange juice} taste?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {Henry} ride his bicycle?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {Grandpa} go fishing?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {your teammate} play football?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the bakery} sell every day?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the soup(汤)} taste for lunch?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {Tom} feel today?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the ice cream} taste?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the song} sound?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the dress} look?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the flower} smell?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the cake} taste?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the banana} taste?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the pineapple} feel?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the pineapples} feel?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the lemon} taste?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the cherrys} feel?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What time ______ {Lily} get up?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {the children} fly kites?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {Lucy} go home after school?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },

];