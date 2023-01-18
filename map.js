const 노량진입시생 = [
  {
    name: "지영",
    score: 80,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "효원",
    score: 50,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "정기",
    score: 60,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "대신",
    score: 30,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "택환",
    score: 94,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "호승",
    score: 30,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "희선",
    score: 23,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "설인",
    score: 56,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
];
// const 노량진코딩기숙학원 = []
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i].score < 40) {
//         노량진코딩기숙학원.push(scores[i].name, scores[i].score)
//     }
// }

// console.log(노량진코딩기숙학원)

// const 빠따 = scores.filter(score => score.score < 40)
// console.log(빠따)

//아래------------함수 줄여 나가는 것 filter 써서 연습-----------
// const 노량진빠따킬러 = 노량진입시생.filter((점수) => {
//   if (점수.score < 40) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const 노량진빠따킬러 = 노량진입시생.filter((점수) => {
//   const result = 점수.score < 40 ? true : false;
//   return result;
// });

// const 노량진빠따킬러 = 노량진입시생.filter((점수) => {
//   return 점수.score < 40 ? true : false;
// });

// const 노량진빠따킬러 = 노량진입시생.filter((점수) => {
//   return 점수.score < 40;
// });

// const 노량진빠따킬러 = 노량진입시생.filter((점수) => 점수.score < 40);

// const 노량진빠따킬러 = 노량진입시생.filter((점수) => 점수.score < 40);
// console.log(노량진빠따킬러);


// -------아래 -------------가장 공부를 잘했던 “지영” 의 점수 확인
// let 지영님score = null;
// for (let i = 0; i < 노량진입시생.length; i++) {
//   if (노량진입시생[i].name === "지영") {
//     지영님score = 노량진입시생[i].score;
//   }
// }

// const 지영님scoreByFind = 노량진입시생.find(점수 => 점수.name === '지영').score
// console.log("지영님score : ", 지영님scoreByFind);


// ---아래 -----문제 하나가 잘못 출제되어 모두에게 5점씩 가산점을 줘야한다. 점수를 보정하라.
// const 보정scores = []
// for (let i = 0; i < 노량진입시생.length; i++) {
//     const newScore = 노량진입시생[i].score + 5
//     보정scores.push({
//         ...노량진입시생[i],
//         점수: newScore,
//     })
// }

const 보정_점수 = 노량진입시생.map(score => ({
    ...score,
    score: score.score + 5 
}))
console.log("보정_점수 : ", 보정_점수)