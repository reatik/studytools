// 音标找不同 20 题（带ID + 修复显示格式）
const phoneticBank = [
    { id: 1, words: [
        { word:"wh[e]n", phonetic:"/e/" },
        { word:"b[e]gin", phonetic:"/ɪ/" },
        { word:"s[e]cond", phonetic:"/e/" }
    ], answerIndex:1 },
    
    { id: 2, words: [
        { word:"[th]ird", phonetic:"/θ/" },
        { word:"bir[th]day", phonetic:"/θ/" },
        { word:"smoo[th]", phonetic:"/ð/" }
    ], answerIndex:2 },
    
    { id: 3, words: [
        { word:"kn[o]w", phonetic:"/əʊ/" },
        { word:"n[o]w", phonetic:"/aʊ/" },
        { word:"cr[o]w", phonetic:"/əʊ/" }
    ], answerIndex:1 },
    
    { id: 4, words: [
        { word:"s[ou]nd", phonetic:"/aʊ/" },
        { word:"r[ou]nd", phonetic:"/aʊ/" },
        { word:"r[ou]gh", phonetic:"/ʌ/" }
    ], answerIndex:2 },
    
    { id: 5, words: [
        { word:"p[ar]ty", phonetic:"/ɑː/" },
        { word:"qu[ar]ter", phonetic:"/ɔː/" },
        { word:"l[ar]ge", phonetic:"/ɑː/" }
    ], answerIndex:1 },
    
    { id: 6, words: [
        { word:"[ar]m", phonetic:"/ɑː/" },
        { word:"tr[a]ffic", phonetic:"/æ/" },
        { word:"gr[a]ss", phonetic:"/ɑː/" }
    ], answerIndex:1 },
    
    { id: 7, words: [
        { word:"cr[o]ss", phonetic:"/ɒ/" },
        { word:"[o]ften", phonetic:"/ɒ/" },
        { word:"d[o]es", phonetic:"/ʌ/" }
    ], answerIndex:2 },
    
    { id: 8, words: [
        { word:"w[a]it", phonetic:"/eɪ/" },
        { word:"p[a]vement", phonetic:"/eɪ/" },
        { word:"t[a]xi", phonetic:"/æ/" }
    ], answerIndex:2 },
    
    { id: 9, words: [
        { word:"[wh]ere", phonetic:"/w/" },
        { word:"[wh]ose", phonetic:"/h/" },
        { word:"[wh]en", phonetic:"/w/" }
    ], answerIndex:1 },
    
    { id: 10, words: [
        { word:"c[ou]sin", phonetic:"/ʌ/" },
        { word:"ab[ou]t", phonetic:"/aʊ/" },
        { word:"undergr[ou]nd", phonetic:"/aʊ/" }
    ], answerIndex:0 },
    
    { id: 11, words: [
        { word:"w[or]ker", phonetic:"/ɜː/" },
        { word:"f[or]ty", phonetic:"/ɔː/" },
        { word:"m[or]ning", phonetic:"/ɔː/" }
    ], answerIndex:0 },
    
    { id: 12, words: [
        { word:"c[oo]k", phonetic:"/ʊ/" },
        { word:"f[oo]d", phonetic:"/uː/" },
        { word:"sch[oo]l", phonetic:"/uː/" }
    ], answerIndex:0 },
    
    { id: 13, words: [
        { word:"dr[ea]m", phonetic:"/iː/" },
        { word:"str[ee]t", phonetic:"/iː/" },
        { word:"br[ea]kfast", phonetic:"/e/" }
    ], answerIndex:2 },
    
    { id: 14, words: [
        { word:"w[a]nt", phonetic:"/ɒ/" },
        { word:"tr[a]veller", phonetic:"/æ/" },
        { word:"tr[a]ffic", phonetic:"/æ/" }
    ], answerIndex:0 },
    
    { id: 15, words: [
        { word:"j[o]b", phonetic:"/ɒ/" },
        { word:"pil[o]t", phonetic:"/aɪ/" },
        { word:"d[o]ctor", phonetic:"/ɒ/" }
    ], answerIndex:1 },
    
    { id: 16, words: [
        { word:"ch[e]ss", phonetic:"/e/" },
        { word:"r[e]d", phonetic:"/e/" },
        { word:"e-m[a]il", phonetic:"/eɪ/" }
    ], answerIndex:2 },
    
    { id: 17, words: [
        { word:"grandp[a]", phonetic:"/ɑː/" },
        { word:"[a]sk", phonetic:"/ɑː/" },
        { word:"[a]way", phonetic:"/ə/" }
    ], answerIndex:2 },
    
    { id: 18, words: [
        { word:"toge[th]er", phonetic:"/ð/" },
        { word:"mou[th]", phonetic:"/θ/" },
        { word:"[th]ing", phonetic:"/θ/" }
    ], answerIndex:1 },
    
    { id: 19, words: [
        { word:"w[ea]r", phonetic:"/eə/" },
        { word:"h[ea]r", phonetic:"/ɪə/" },
        { word:"p[ea]r", phonetic:"/eə/" }
    ], answerIndex:1 },
    
    { id: 20, words: [
        { word:"sh[ow]", phonetic:"/əʊ/" },
        { word:"h[ow]", phonetic:"/aʊ/" },
        { word:"br[ow]n", phonetic:"/aʊ/" }
    ], answerIndex:0 },
    
    { id: 21, words: [
        { word:"b[a]nk", phonetic:"/æ/" },
        { word:"[a]pple", phonetic:"/æ/" },
        { word:"b[a]r", phonetic:"/ɑː/" },
        { word:"h[a]ve", phonetic:"/æ/" }
    ], answerIndex:2 },
    { id: 22, words: [
        { word:"f[oo]t", phonetic:"/ʊ/" },
        { word:"z[oo]", phonetic:"/uː/" },
        { word:"sch[oo]l", phonetic:"/uː/" },
        { word:"f[oo]d", phonetic:"/uː/" }
    ], answerIndex:0 },
    
    { id: 23, words: [
        { word:"[s]trong", phonetic:"/s/" },
        { word:"dog[s]", phonetic:"/z/" },
        { word:"thi[s]", phonetic:"/s/" },
        { word:"ni[c]e", phonetic:"/s/" }
    ], answerIndex:1 },
    
    { id: 24, words: [
        { word:"smoo[th]", phonetic:"/ð/" },
        { word:"too[th]", phonetic:"/θ/" },
        { word:"bo[th]", phonetic:"/θ/" },
        { word:"[th]ree", phonetic:"/θ/" }
    ], answerIndex:0 },
    
    { id: 25, words: [
        { word:"[b]ag", phonetic:"/b/" },
        { word:"[b]ank", phonetic:"/b/" },
        { word:"cu[b]e", phonetic:"/b/" },
        { word:"clim[b]", phonetic:"/" }
    ], answerIndex:3 },
    
    { id: 26, words: [
        { word:"sh[a]rp", phonetic:"/ɑː/" },
        { word:"f[a]ther", phonetic:"/ɑː/" },
        { word:"b[a]kery", phonetic:"/eɪ/" },
        { word:"p[a]st", phonetic:"/ɑː/" }
    ], answerIndex:2 },
    
    { id: 27, words: [
        { word:"too[th]ache", phonetic:"/θ/" },
        { word:"mou[th]", phonetic:"/θ/" },
        { word:"smoo[th]", phonetic:"/ð/" },
        { word:"bo[th]", phonetic:"/θ/" }
    ], answerIndex:2 },
    
    { id: 28, words: [
        { word:"c[o]ld", phonetic:"/əʊ/" },
        { word:"n[o]se", phonetic:"/əʊ/" },
        { word:"th[o]se", phonetic:"/əʊ/" },
        { word:"d[o]", phonetic:"/uː/" }
    ], answerIndex:3 },
    
    { id: 29, words: [
        { word:"doct[or]", phonetic:"/ə/" },
        { word:"p[ur]ple", phonetic:"/ɜː/" },
        { word:"g[ir]l", phonetic:"/ɜː/" },
        { word:"w[or]k", phonetic:"/ɜː/" }
    ], answerIndex:0 },
    
    { id: 30, words: [
        { word:"[wh]at", phonetic:"/w/" },
        { word:"[wh]o", phonetic:"/h/" },
        { word:"[wh]ich", phonetic:"/w/" },
        { word:"[wh]ere", phonetic:"/w/" }
    ], answerIndex:1 },

];