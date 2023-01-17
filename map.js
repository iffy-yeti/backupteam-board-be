
const 노량진입시생 = [
    { name: '지영', score: 80, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
    { name: '효원', score: 50, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
    { name: '정기', score: 60, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
    { name: '대신', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
    { name: '택환', score: 94, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
    { name: '호승', score: 30, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
    { name: '희선', score: 23, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
    { name: '설인', score: 56, mbti: 'INFP', addr: "지구 어딘가 ", contact: "010-1234-1234" },
]
// const 노량진코딩기숙학원 = []
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i].score < 40) {
//         노량진코딩기숙학원.push(scores[i].name, scores[i].score)
//     }
// }

// console.log(노량진코딩기숙학원)

// const 빠따 = scores.filter(score => score.score < 40)
// console.log(빠따)


const 노량진빠따킬러 = 노량진입시생.filter((점수) => {
    if (점수.score < 40) {
        return true
    } else {
        return false
    }
})







//졍버젼

// const 빠따byFilter = scores.filter((score) => {
//     if (score.score < 40) {
//         return true
//     } else {
//         return false
//     }
// })

// const 빠따byFilter = scores.filter((score) => {
//     const result = score.score < 40 ? true : false
//     return result
// })

// const 빠따byFilter = scores.filter((score) => {
//     return score.score < 40 ? true : false
// })

// const 빠따byFilter = scores.filter((score) => {
//     return score.score < 40
// })

// const 빠따byFilter = scores.filter((score) => score.score < 40)

// const 빠따byFilter = scores.filter(score => score.score < 40)