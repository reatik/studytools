const sentenceBank = [

    {
        text: "{We} ______ English and Chinese.",
        options: [
            { label: "A", value: "learn", correct: true },
            { label: "B", value: "learns", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{You} ______ a super robot!",
        options: [
            { label: "A", value: "have", correct: true },
            { label: "B", value: "has", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{The birds} ______ in the tree.",
        options: [
            { label: "A", value: "sing", correct: true },
            { label: "B", value: "sings", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{They} ______ a picnic in the park.",
        options: [
            { label: "A", value: "have", correct: true },
            { label: "B", value: "has", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{The grasshoppers} ______ in the grass.",
        options: [
            { label: "A", value: "jump", correct: true },
            { label: "B", value: "jumps", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Tom and Lucy} ______ to school together every day.",
        options: [
            { label: "A", value: "go", correct: true },
            { label: "B", value: "goes", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Ben, Peter and Jill} ______ a big kite in the park.",
        options: [
            { label: "A", value: "fly", correct: true },
            { label: "B", value: "flies", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{My father and my uncle} ______ strong and tall.",
        options: [
            { label: "A", value: "are", correct: true },
            { label: "B", value: "is", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Emma and her sister} ______ red dresses today.",
        options: [
            { label: "A", value: "wear", correct: true },
            { label: "B", value: "wears", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{You and I} ______ good friends.",
        options: [
            { label: "A", value: "are", correct: true },
            { label: "B", value: "is", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{The boys, Tom and Peter} ______ football on the playground.",
        options: [
            { label: "A", value: "play", correct: true },
            { label: "B", value: "plays", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Miss Wang and Mr Li} ______ English and Chinese.",
        options: [
            { label: "A", value: "teach", correct: true },
            { label: "B", value: "teaches", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{My mother and I} ______ food for the family.",
        options: [
            { label: "A", value: "cook", correct: true },
            { label: "B", value: "cooks", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{You and I} ______ are good friends.",
        options: [
            { label: "A", value: "are", correct: true },
            { label: "B", value: "am", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{He and you} ______ in the same class.",
        options: [
            { label: "A", value: "are", correct: true },
            { label: "B", value: "is", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{My shoes} ______ under the chair.",
        options: [
            { label: "A", value: "is", correct: false },
            { label: "B", value: "are", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{We} ______ a photograph in the park.",
        options: [
            { label: "A", value: "take", correct: true },
            { label: "B", value: "takes", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{The children} ______ a rest after running.",
        options: [
            { label: "A", value: "take", correct: true },
            { label: "B", value: "takes", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{You} ______ your clothes on the bed.",
        options: [
            { label: "A", value: "put", correct: true },
            { label: "B", value: "puts", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{The lights} ______ on the wall.",
        options: [
            { label: "A", value: "are", correct: true },
            { label: "B", value: "is", correct: false }
        ],
        difficulty: "陈述"
    },
    
    {
        text: "{My socks} ______ blue and white.",
        options: [
            { label: "A", value: "are", correct: true },
            { label: "B", value: "is", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{The elephant} ______ very strong.",
        options: [
            { label: "A", value: "is", correct: true },
            { label: "B", value: "are", correct: false },
            { label: "C", value: "am", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Two birds} ______ in the tree.",
        options: [
            { label: "A", value: "is", correct: false },
            { label: "B", value: "are", correct: true },
            { label: "C", value: "am", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{The lion} ______ the king of the forest.",
        options: [
            { label: "A", value: "am", correct: false },
            { label: "B", value: "is", correct: true },
            { label: "C", value: "are", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{This picture} ______ beautiful.",
        options: [
            { label: "A", value: "am", correct: false },
            { label: "B", value: "is", correct: true },
            { label: "C", value: "are", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{The two ducks} ______ yellow.",
        options: [
            { label: "A", value: "am", correct: false },
            { label: "B", value: "is", correct: false },
            { label: "C", value: "are", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{The snake} ______ in the grass.",
        options: [
            { label: "A", value: "hide", correct: false },
            { label: "B", value: "hides", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Monkeys} ______ bananas.",
        options: [
            { label: "A", value: "eat", correct: true },
            { label: "B", value: "eats", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{A bee} ______ honey.",
        options: [
            { label: "A", value: "make", correct: false },
            { label: "B", value: "makes", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{The horse} ______ fast.",
        options: [
            { label: "A", value: "run", correct: false },
            { label: "B", value: "runs", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Dogs} ______ with children.",
        options: [
            { label: "A", value: "play", correct: true },
            { label: "B", value: "plays", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{We} ______ English songs.",
        options: [
            { label: "A", value: "sing", correct: true },
            { label: "B", value: "sings", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Tom} ______ a storybook under the desk.",
        options: [
            { label: "A", value: "find", correct: false },
            { label: "B", value: "finds", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{You} ______ very hard（努力） at school.",
        options: [
            { label: "A", value: "study", correct: true },
            { label: "B", value: "studies", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Amy and I} ______ best friends.",
        options: [
            { label: "A", value: "am", correct: false },
            { label: "B", value: "is", correct: false },
            { label: "C", value: "are", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{This little rabbit} ______ so cute.",
        options: [
            { label: "A", value: "is", correct: true },
            { label: "B", value: "are", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{They} ______ off their coats because it is hot.",
        options: [
            { label: "A", value: "take", correct: true },
            { label: "B", value: "takes", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{The windows} ______ big and clean.",
        options: [
            { label: "A", value: "are", correct: true },
            { label: "B", value: "is", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{We} ______ a sandcastle on the beach.",
        options: [
            { label: "A", value: "make", correct: true },
            { label: "B", value: "makes", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{This pair of trousers} ______ blue.",
        options: [
            { label: "A", value: "is", correct: true },
            { label: "B", value: "are", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Two pairs of shorts} ______ on the bed.",
        options: [
            { label: "A", value: "is", correct: false },
            { label: "B", value: "are", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{This pair of gloves} ______ soft.",
        options: [
            { label: "A", value: "is", correct: true },
            { label: "B", value: "are", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{A pair of shoes} ______ on the floor(地面).",
        options: [
            { label: "A", value: "is", correct: true },
            { label: "B", value: "are", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{A pair of shoes} ______ under the chair.",
        options: [
            { label: "A", value: "am", correct: false },
            { label: "B", value: "is", correct: true },
            { label: "C", value: "are", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{His hair} ______ very short.",
        options: [
            { label: "A", value: "are", correct: false },
            { label: "B", value: "is", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{This pair of trousers} ______ too long.",
        options: [
            { label: "A", value: "is", correct: true },
            { label: "B", value: "are", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{A pair of glasses} ______ on the table.",
        options: [
            { label: "A", value: "am", correct: false },
            { label: "B", value: "is", correct: true },
            { label: "C", value: "are", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{That pair of socks} ______ a hole（洞） in it.",
        options: [
            { label: "A", value: "have", correct: false },
            { label: "B", value: "has", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{A nice pair of gloves} ______ my birthday gift（生日礼物）.",
        options: [
            { label: "A", value: "am", correct: false },
            { label: "B", value: "is", correct: true },
            { label: "C", value: "are", correct: false }
        ],
        difficulty: "陈述"
    },
    
    {
        text: "The rabbit {Can} ______ very fast.",
        options: [
            { label: "A", value: "run", correct: true },
            { label: "B", value: "runs", correct: false }
        ],
        difficulty: "陈述"
    },

    {
        text: "The fish {Can} ______ in the river.",
        options: [
            { label: "A", value: "swim", correct: true },
            { label: "B", value: "swims", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "Miss Li {Can} ______ English songs.",
        options: [
            { label: "A", value: "sing", correct: true },
            { label: "B", value: "sings", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "The cat {Can} ______ up the tree.",
        options: [
            { label: "A", value: "climb", correct: true },
            { label: "B", value: "climbs", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "We {Can} ______ pictures in the park.",
        options: [
            { label: "A", value: "draw", correct: true },
            { label: "B", value: "draws", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "My father {Can} ______ a car.",
        options: [
            { label: "A", value: "drive", correct: true },
            { label: "B", value: "drives", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "The boy {Can} ______ a kite.",
        options: [
            { label: "A", value: "fly", correct: true },
            { label: "B", value: "flies", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "They {Can} ______ on the ice.",
        options: [
            { label: "A", value: "skate", correct: true },
            { label: "B", value: "skates", correct: false }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Three pairs of shoes} ______ on the shelf.",
        options: [
            { label: "A", value: "is", correct: false },
            { label: "B", value: "are", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Two pairs of glasses} ______ 80 yuan.",
        options: [
            { label: "A", value: "is", correct: false },
            { label: "B", value: "are", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Two pairs of shorts} ______ new.",
        options: [
            { label: "A", value: "is", correct: false },
            { label: "B", value: "are", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Five pairs of socks} ______ here.",
        options: [
            { label: "A", value: "is", correct: false },
            { label: "B", value: "are", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{Those pairs of scissors} ______ sharp.",
        options: [
            { label: "A", value: "is", correct: false },
            { label: "B", value: "are", correct: true }
        ],
        difficulty: "陈述"
    },

    // ===== 否定句 =====
    {
        text: "{Those two pairs of socks} ______ black.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{Several pairs of gloves} ______ lost（丢失）.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{These pairs of earrings} ______ cheap(便宜).",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{Two pairs of shoes} ______ old.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },    
    {
        text: "{He} ______ like playing football.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{The bird} {Can}'t ______ in the rain.",
        options: [
            { label: "A", value: "fly", correct: true },
            { label: "B", value: "flies", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{My sister} {Can}'t ______ the piano.",
        options: [
            { label: "A", value: "play", correct: true },
            { label: "B", value: "plays", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The dog} {Can}'t ______ in the pool.",
        options: [
            { label: "A", value: "swim", correct: true },
            { label: "B", value: "swims", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Mrs Li} {Can}'t ______ English very well.",
        options: [
            { label: "A", value: "speak", correct: true },
            { label: "B", value: "speaks", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The baby} {Can}'t ______ on the wall.",
        options: [
            { label: "A", value: "write", correct: true },
            { label: "B", value: "writes", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{We} {Can}'t ______ photos here.",
        options: [
            { label: "A", value: "take", correct: true },
            { label: "B", value: "takes", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The lion} {Can}'t ______ trees.",
        options: [
            { label: "A", value: "climb", correct: true },
            { label: "B", value: "climbs", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{I} {Can}'t ______ spicy(辣的) food.",
        options: [
            { label: "A", value: "eat", correct: true },
            { label: "B", value: "eats", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The students} {Can}'t ______ quietly.",
        options: [
            { label: "A", value: "sit", correct: true },
            { label: "B", value: "sits", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The robot} {Can}'t ______ by itself.",
        options: [
            { label: "A", value: "think", correct: true },
            { label: "B", value: "thinks", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{This pair of chopsticks(筷子)} ______ clean.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
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
    {
        text: "{I} ______ like taking the bus.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    
    {
        text: "{The soup} ______ taste salty.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{He} ______ like bitter lemons.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{She} ______ play the piano.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{They} ______ go to school on Sunday.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{My father} ______ watch TV in the morning.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{We} ______ have any pineapples.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The monkey} ______ eat meat.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{You} ______ smell the flowers now.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Tom} ______ like salty food.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{I} ______ want to sleep now.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Amy} ______ take the bus to school.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{The children} ______ play on the grass.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{My dog} ______ like sour fruit.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{Her hair} ______ very long.",
        options: [
            { label: "A", value: "are", correct: false },
            { label: "B", value: "is", correct: true }
        ],
        difficulty: "陈述"
    },
    {
        text: "{You and I} ______ like winter.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Ben} ______ go fishing with his dad.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{We} ______ boil water every day.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The panda} ______ eat bananas.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{I} ______ drink coffee in the evening.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Miss Li} ______ teach English.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{Dogs} ______ fly in the sky.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Mr Wang} ______ drive a car to work.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{The twins} ______ like sweet pies.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{My little sister} ______ go ice-skating.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{These robots} ______ get tired.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Grandma} ______ drink coffee at night.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{The aeroplane} ______ land in the park.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{Lily and Lucy} ______ take the bus home.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The tiger} ______ like salty meat.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{I and my cousin} ______ have any yuan.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{My shoes} ______ fit my feet well.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The baby whale} ______ swim alone(独自).",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{These gloves} ______ feel smooth.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The farmer} ______ plant trees in winter.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{My kite} ______ fly high today.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{We} {Can}'t ______ see the moon in the day.",
        options: [
            { label: "A", value: "doesn't", correct: false },
            { label: "B", value: "don't", correct: true }
        ],
        difficulty: "{Can} / do辨析"
    },
    {
        text: "{That grasshopper} ______ like ants.",
        options: [
            { label: "A", value: "doesn't", correct: true },
            { label: "B", value: "don't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Tom and Jerry} ______ like eating vegetables.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Your father and I} ______ go to the park today.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },

    {
        text: "{Uncle Tom} ______ drive a bus.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{Miss Wang and Mr Li} ______ teach PE.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The little dog} ______ like cold weather.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{These scissors} ______ cut paper well.",
        options: [
            { label: "A", value: "don't", correct: true },
            { label: "B", value: "doesn't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The big elephant} ______ run fast like a horse.",
        options: [
            { label: "A", value: "don't", correct: false },
            { label: "B", value: "doesn't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{A bottle of water} ______ cold today.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Two bowls of noodles} ______ hot enough.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{A pair of glasses} ______ on the table.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{These two pairs of shoes} ______ new.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{A cup of coffee} ______ sweet.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Three slices of bread} ______ fresh.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{A glass of juice} ______ sour.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The twins} ______ in the classroom.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{A box of sweets} ______ for you.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{A loaf of bread} ______ soft.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Those scissors} ______ sharp.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{A pair of trousers} ______ blue.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Two bars（块） of chocolate} ______ cheap.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{A packet（包） of salt} ______ sweet.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{My jeans（牛仔裤）} ______ clean today.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{A bag of apples} ______ heavy(重).",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{These chopsticks} ______ made of wood.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{The little girl} ______ happy today.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{My parents} ______ at home now.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{Our school} ______ far from here.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The windows} ______ open.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{His brother} ______ a teacher.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The birds} ______ in the cage.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{This picture} ______ beautiful.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{My hands} ______ clean.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{The moon} ______ a star.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Her shoes} ______ under the bed.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{That old man} ______ my grandfather.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The trees} ______ green in winter.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{This story} ______ funny.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{Their bikes} ______ new.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{The baby} ______ sleepy now.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{My pencils} ______ in the pencil case.",
        options: [
            { label: "A", value: "isn't", correct: false },
            { label: "B", value: "aren't", correct: true }
        ],
        difficulty: "否定"
    },
    {
        text: "{This pair of socks} ______ white.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{That boy} ______ my brother.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
        ],
        difficulty: "否定"
    },
    {
        text: "{The zoo} ______ near my house.",
        options: [
            { label: "A", value: "isn't", correct: true },
            { label: "B", value: "aren't", correct: false }
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
    {
        text: "______ {I} your best friend?",
        options: [
            { label: "A", value: "Am", correct: true },
            { label: "B", value: "Is", correct: false },
            { label: "B", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {you} thirsty?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{______} you ready?",
        options: [
            { label: "A", value: "am", correct: false },
            { label: "B", value: "is", correct: false },
            { label: "C", value: "are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the lemon} sour?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the soup} salty?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the bread} hard?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the window} clean?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the desk} smooth?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the elephant} strong?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the panda} lovely?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the robot} super?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the weather} sunny today?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the children} happy?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the trousers} grey?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the birds} in the aviary?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the books} on the bookshelf?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the gloves} soft?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your parents} at home?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your hands} dirty?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the sheep} white?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the fish} fresh?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the water} cold?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {he} a doctor?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {she} happy today?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{______} {a pair of shoes} on the floor?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{______} {this pair of trousers} expensive（贵）?",
        options: [
            { label: "A", value: "Is", correct: true },
            { label: "B", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },

    {
        text: "{______} {that pair of socks} white?",
        options: [
            { label: "A", value: "Is", correct: true },
            { label: "B", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{______} {a pair of gloves} warm?",
        options: [
            { label: "A", value: "Is", correct: true },
            { label: "B", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {it} a rainy day?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {we} late for school?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {they} good at English?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the baby} hungry?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your parents} busy?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the dog} sleeping?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the cats} black?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {Mary} angry?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {Tom and I} classmates?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {this} your bag?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {these} your pencils?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {that} a bird?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {those} cows?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {my hands} clean?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the picture} nice?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your father} a teacher?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your mother} at home?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your sisters} tall?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your brother} clever?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your eyes} blue?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your nose} small?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your trousers} new?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your glasses} on the table?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your best friend} here?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your grandparents} kind?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: false },
            { label: "C", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {you} like apples?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{______} {two pairs of shoes} white?",
        options: [
            { label: "A", value: "Is", correct: false },
            { label: "B", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{______} {three pairs of socks} in the drawer（抽屉）?",
        options: [
            { label: "A", value: "Is", correct: false },
            { label: "B", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{______} {those pairs of trousers} cheap?",
        options: [
            { label: "A", value: "Is", correct: false },
            { label: "B", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{______} {two pairs of glasses} new?",
        options: [
            { label: "A", value: "Is", correct: false },
            { label: "B", value: "Are", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {they} play football?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {we} have a picnic?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the children} run fast?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your friends} swim?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {I} need help?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the birds} fly high?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {these dogs} bark?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {you} want some water?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {they} eat meat?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {we} go to school by bus?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the monkeys} climb trees?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {you} have a pet?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the pandas} like bamboo?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your parents} work hard?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the students} read books?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {we} need some salt?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {they} drink coffee?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the whales} live in the sea?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {you} feel tired?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {he} like skating?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {she} have a doll?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the lion} roar?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your father} cook dinner?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the bird} sing?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {it} taste sweet?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {Mary} walk to school?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the baby} cry?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the bus} stop here?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your sister} wear a skirt?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {he} feel angry?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {her uncle} live in China?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the fish} swim fast?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the computer（电脑）} work well?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {she} teach English?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {the moon} shine at night?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ {your brother} play the guitar(吉他)?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} your brother ______ basketball?",
        options: [
            { label: "A", value: "plays", correct: false },
            { label: "B", value: "play", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} she ______ fast?",
        options: [
            { label: "A", value: "runs", correct: false },
            { label: "B", value: "run", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} Tom ______ the guitar?",
        options: [
            { label: "A", value: "play", correct: true },
            { label: "B", value: "plays", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} your parents ______ Chinese?",
        options: [
            { label: "A", value: "speaks", correct: false },
            { label: "B", value: "speak", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} the bird ______ in the sky?",
        options: [
            { label: "A", value: "fly", correct: true },
            { label: "B", value: "flies", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} your friend ______ swimming?",
        options: [
            { label: "A", value: "goes", correct: false },
            { label: "B", value: "go", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} Lisa ______ the piano?",
        options: [
            { label: "A", value: "play", correct: true },
            { label: "B", value: "plays", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} we ______ in the library?",
        options: [
            { label: "A", value: "reads", correct: false },
            { label: "B", value: "read", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} the baby ______ ?",
        options: [
            { label: "A", value: "walk", correct: true },
            { label: "B", value: "walks", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} your teacher ______ English?",
        options: [
            { label: "A", value: "speak", correct: true },
            { label: "B", value: "speaks", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} they ______ kites on the hill?",
        options: [
            { label: "A", value: "fly", correct: true },
            { label: "B", value: "flies", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} your dog ______ tricks?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} the cat ______ up the tree?",
        options: [
            { label: "A", value: "climbs", correct: false },
            { label: "B", value: "climb", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} I ______ here?",
        options: [
            { label: "A", value: "sit", correct: true },
            { label: "B", value: "sits", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} he ______ me with my homework?",
        options: [
            { label: "A", value: "help", correct: true },
            { label: "B", value: "helps", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ your mother a doctor?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ your brothers at school now?",
        options: [
            { label: "A", value: "Is", correct: false },
            { label: "B", value: "Are", correct: true },
            { label: "C", value: "Be", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ this box very heavy(重)?",
        options: [
            { label: "A", value: "Am", correct: false },
            { label: "B", value: "Is", correct: true },
            { label: "C", value: "Are", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ the children happy today?",
        options: [
            { label: "A", value: "Is", correct: false },
            { label: "B", value: "Are", correct: true },
            { label: "C", value: "Am", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ your parents often have dinner at six o'clock?",
        options: [
            { label: "A", value: "Do", correct: true },
            { label: "B", value: "Does", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ the dog sleep in its basket?",
        options: [
            { label: "A", value: "Do", correct: false },
            { label: "B", value: "Does", correct: true }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "______ your pencils in the pencil case?",
        options: [
            { label: "A", value: "Is", correct: false },
            { label: "B", value: "Are", correct: true },
            { label: "C", value: "Am", correct: false }
        ],
        difficulty: "一般疑问"
    },
    {
        text: "{Can} Mr Wang ______ Chinese chess?",
        options: [
            { label: "A", value: "play", correct: true },
            { label: "B", value: "plays", correct: false }
        ],
        difficulty: "情态动词后接动词原形"
    },
    {
        text: "{Can} the swan ______ in the lake?",
        options: [
            { label: "A", value: "swims", correct: false },
            { label: "B", value: "swim", correct: true }
        ],
        difficulty: "情态动词后接动词原形"
    },
    {
        text: "______ {your father} come home at five o'clock?",
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
        text: "{My hands} ______ cold.",
        options: [
            { label: "A", value: "feel", correct: true },
            { label: "B", value: "feels", correct: false }
        ],
        difficulty: "陈述"
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
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {Tom and his cousin} play basketball?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the little dog} cross the road?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the lovely parrots} like doing?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {Aunt Liu} go to the supermarket?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {you and your friend} read books?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the small duck} like eating?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {those bees} fly around the flowers?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {Paul} do his homework?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {your grandma} like for breakfast?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {we} have our PE class?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {Amy and Jane} go to school together?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the cute giraffe} eat every day?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {the boys} play after class?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {Uncle Wang} work every day?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {this lovely puppy} like to play?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {the pupils} run on the playground?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {those ducks} like doing in the lake?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {Jack} meet his good friend?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {Sally} drink in the morning?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {Ben} fly his model plane(模型飞机)?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "When ______ {your uncle} go to his office?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What time ______ {Miss Li} have her breakfast?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {your cousin} like to draw?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the little hamster(仓鼠)} run in the cage（笼子）?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {the bear} sleep in winter?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the shop} sell in it?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {this toy car} run on the floor?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the watermelon} taste?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {it} taste?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the teachers} do in the office?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How ______ {the children} go to the park?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {two rabbits} play on the grass?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {the girls} skip in the playground?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What colour ______ {Alice and Kitty} like?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {many ducks} swim in the river?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {Lucy and Lily} like to collect（收集）?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {you and your father} go hiking（徒步）?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What ______ {they} do after school every day?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "{What colour} ______ {this pair of shoes}?",
        options: [
            { label: "A", value: "am", correct: false },
            { label: "B", value: "is", correct: true },
            { label: "C", value: "are", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "{What colour} ______ {that pair of jeans}?",
        options: [
            { label: "A", value: "is", correct: true },
            { label: "B", value: "are", correct: false }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "{How much} ______ {this pair of gloves}?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "Where ______ {we} visit next Sunday?",
        options: [
            { label: "A", value: "do", correct: true },
            { label: "B", value: "does", correct: false }
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
    {
        text: "How many legs ______ {the insect} have?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "What colour ______ {John} like best(最)?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How many crayons（蜡笔） ______ {Emma} have in her box?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "How many pencils ____ {your sister} have?",
        options: [
            { label: "A", value: "do", correct: false },
            { label: "B", value: "does", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "{Where} ______ {the two pairs of shoes}?",
        options: [
            { label: "A", value: "is", correct: false },
            { label: "B", value: "are", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "{How many} ______ {these pairs of socks}?",
        options: [
            { label: "A", value: "is", correct: false },
            { label: "B", value: "are", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "{What colour} ______ {those pairs of jeans}?",
        options: [
            { label: "A", value: "is", correct: false },
            { label: "B", value: "are", correct: true }
        ],
        difficulty: "特殊疑问"
    },
    {
        text: "{How much} ______ {two pairs of gloves}?",
        options: [
            { label: "A", value: "is", correct: false },
            { label: "B", value: "are", correct: true }
        ],
        difficulty: "特殊疑问"
    }

];