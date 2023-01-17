let arr = [3, 4, 5, 6];

for (let i = 0; i < arr.length; i++){
  arr[i] = arr[i] * 3;
}

console.log(arr); // [9, 12, 15, 18]

////////// 위에는 for문으로 아래는 map으로 한것이오

let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); // [9, 12, 15, 18]

////////// 아래는 반복문 연습이오

// 반복문 예제

// 1. 1 부터 10 까지 console.log() 를 사용하여 출력하시오.
  
// 2. 1 부터 10 까지 더한 결과값을 console.log() 를 사용하여 출력하시오.
// 3. 1 부터 10 까지 곱한 결과값을 console.log() 를 사용하여 출력하시오.
// 4. 1 부터 10 까지 중에 짝수만 console.log() 를 사용하여 출력하시오.
// 5. 1 부터 10 까지 중에 홀수만 console.log() 를 사용하여 출력하시오.
// 6. array = [1,2,3,4,5] 배열안에 값을 출력하시오.
// 7. array = [1,2,3,4,5] 배열안에 짝수만 출력하시오.

