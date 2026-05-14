// 音标找不同 20 题（带ID + 修复显示格式）
const phoneticBank = [
    { id: 1, words: [
        { word:"c[a]t", phonetic:"/æ/" },
        { word:"b[a]g", phonetic:"/æ/" },
        { word:"c[a]ke", phonetic:"/eɪ/" },
        { word:"m[a]p", phonetic:"/æ/" }
    ], answerIndex:2 },

    { id: 2, words: [
        { word:"h[i]t", phonetic:"/ɪ/" },
        { word:"b[i]g", phonetic:"/ɪ/" },
        { word:"l[i]ke", phonetic:"/aɪ/" },
        { word:"s[i]t", phonetic:"/ɪ/" }
    ], answerIndex:2 },

    { id: 3, words: [
        { word:"p[en]", phonetic:"/e/" },
        { word:"b[ed]", phonetic:"/e/" },
        { word:"sh[e]", phonetic:"/iː/" },
        { word:"l[eg]", phonetic:"/e/" }
    ], answerIndex:2 },

    { id: 4, words: [
        { word:"b[ox]", phonetic:"/ɒ/" },
        { word:"d[og]", phonetic:"/ɒ/" },
        { word:"h[ome]", phonetic:"/əʊ/" },
        { word:"s[ock]", phonetic:"/ɒ/" }
    ], answerIndex:2 },

    { id: 5, words: [
        { word:"c[up]", phonetic:"/ʌ/" },
        { word:"b[us]", phonetic:"/ʌ/" },
        { word:"r[ul]er", phonetic:"/uː/" },
        { word:"m[ug]", phonetic:"/ʌ/" }
    ], answerIndex:2 },

    { id: 6, words: [
        { word:"f[ood]", phonetic:"/uː/" },
        { word:"b[ook]", phonetic:"/ʊ/" },
        { word:"r[oom]", phonetic:"/uː/" },
        { word:"sch[oo]l", phonetic:"/uː/" }
    ], answerIndex:1 },

    { id: 7, words: [
        { word:"c[a]r", phonetic:"/ɑː/" },
        { word:"c[a]t", phonetic:"/æ/" },
        { word:"h[a]rd", phonetic:"/ɑː/" },
        { word:"f[a]r", phonetic:"/ɑː/" }
    ], answerIndex:1 },

    { id: 8, words: [
        { word:"b[ird]", phonetic:"/ɜː/" },
        { word:"g[irl]", phonetic:"/ɜː/" },
        { word:"h[orse]", phonetic:"/ɔː/" },
        { word:"sh[irt]", phonetic:"/ɜː/" }
    ], answerIndex:2 },

    { id: 9, words: [
        { word:"h[air]", phonetic:"/eə/" },
        { word:"ch[air]", phonetic:"/eə/" },
        { word:"n[ear]", phonetic:"/ɪə/" },
        { word:"p[ear]", phonetic:"/eə/" }
    ], answerIndex:2 },

    { id:10, words: [
        { word:"wh[a]t", phonetic:"/ɒ/" },
        { word:"w[a]sh", phonetic:"/ɒ/" },
        { word:"w[a]ter", phonetic:"/ɔː/" },
        { word:"w[a]tch", phonetic:"/ɒ/" }
    ], answerIndex:2 },

    { id:11, words: [
        { word:"th[is]", phonetic:"/ð/" },
        { word:"th[at]", phonetic:"/ð/" },
        { word:"th[ree]", phonetic:"/θ/" },
        { word:"th[ese]", phonetic:"/ð/" }
    ], answerIndex:2 },

    { id:12, words: [
        { word:"[sh]e", phonetic:"/ʃ/" },
        { word:"[sh]ip", phonetic:"/ʃ/" },
        { word:"[ch]air", phonetic:"/tʃ/" },
        { word:"[sh]op", phonetic:"/ʃ/" }
    ], answerIndex:2 },

    { id:13, words: [
        { word:"[th]in", phonetic:"/θ/" },
        { word:"[th]ank", phonetic:"/θ/" },
        { word:"[th]is", phonetic:"/ð/" },
        { word:"[th]ree", phonetic:"/θ/" }
    ], answerIndex:2 },

    { id:14, words: [
        { word:"[c]at", phonetic:"/k/" },
        { word:"[c]ap", phonetic:"/k/" },
        { word:"[c]ity", phonetic:"/s/" },
        { word:"[c]ar", phonetic:"/k/" }
    ], answerIndex:2 },

    { id:15, words: [
        { word:"[g]o", phonetic:"/ɡ/" },
        { word:"[g]et", phonetic:"/ɡ/" },
        { word:"[g]iraffe", phonetic:"/dʒ/" },
        { word:"[g]ame", phonetic:"/ɡ/" }
    ], answerIndex:2 },

    { id:16, words: [
        { word:"[n]o", phonetic:"/n/" },
        { word:"[n]et", phonetic:"/n/" },
        { word:"[ng]ood", phonetic:"/ŋ/" },
        { word:"[n]ut", phonetic:"/n/" }
    ], answerIndex:2 },

    { id:17, words: [
        { word:"[s]un", phonetic:"/s/" },
        { word:"[s]ea", phonetic:"/s/" },
        { word:"i[s]", phonetic:"/z/" },
        { word:"[s]it", phonetic:"/s/" }
    ], answerIndex:2 },

    { id:18, words: [
        { word:"[z]oo", phonetic:"/z/" },
        { word:"[z]one", phonetic:"/z/" },
        { word:"[s]un", phonetic:"/s/" },
        { word:"[z]ebra", phonetic:"/z/" }
    ], answerIndex:2 },

    { id:19, words: [
        { word:"[wh]o", phonetic:"/h/" },
        { word:"[wh]om", phonetic:"/h/" },
        { word:"[wh]at", phonetic:"/w/" },
        { word:"[wh]ose", phonetic:"/h/" }
    ], answerIndex:2 },

    { id:20, words: [
        { word:"[kn]ow", phonetic:"/n/" },
        { word:"[kn]ee", phonetic:"/n/" },
        { word:"[k]ey", phonetic:"/k/" },
        { word:"[kn]ife", phonetic:"/n/" }
    ], answerIndex:2 }
];