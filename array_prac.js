//splice 연습
let arr = [32, 54, 23, 234, 2341, 1, 67]
arr.splice(0, 3);
console.log(arr);
// 예상 결과 [234, 2341, 1, 67]

let love = ['i', 'really', 'love', 'and', 'hate', 'you']
love.splice(1, 3);
let result = love.join('');
//배열에서 빠져서 [] 없어져서 나올것 예상
console.log(love);
console.log(result);
// 예상 결과 i hate you

let newSplice = [1, 2, 3, 4, 5];
newSplice.splice(1, 3, 100, 200);
console.log(newSplice);
// [1, 100, 200, 5]

let orr = [1, 2, 3, 4, 5];
let resolt = orr.splice(1, 2);
console.log(orr);
//[1, 4, 5]
console.log(resolt);
//[2, 3]