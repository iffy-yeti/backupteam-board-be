// 반복문 예제

// 1. 1 부터 10 까지 console.log() 를 사용하여 출력하시오.

// for(let i = 1; i <= 10; i++)
// console.log(i)

// 2. 1 부터 10 까지 더한 결과값을 console.log() 를 사용하여 출력하시오.

// let result = 0
// for (let i = 1; i <= 10; i++)
//   result = result + i
// console.log(result)

// 3. 1 부터 10 까지 곱한 결과값을 console.log() 를 사용하여 출력하시오.

// let result = 1
// for (let i = 1; i <= 10; i++)
//   result = result * i
// console.log(result)

// 4. 1 부터 10 까지 중에 짝수만 console.log() 를 사용하여 출력하시오.

// for(let i = 1; i <= 10; i++) {
//   if(i % 2 === 0){
//     console.log(i)
//   }
// }

// 5. 1 부터 10 까지 중에 홀수만 console.log() 를 사용하여 출력하시오.

// for(let i = 1; i <= 10; i++) {
//   if(i % 2 !== 0){
//     console.log(i)
//   }
// }

// 6. array = [1,2,3,4,5] 배열안에 값을 출력하시오.

// const array = [1, 2, 3, 4, 5]
// for(let i = 0; i < array.length; i++) {
//   console.log(array[i])
// }

// 7. array = [1,2,3,4,5] 배열안에 짝수만 출력하시오.

const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(array[i]);
  }
}
