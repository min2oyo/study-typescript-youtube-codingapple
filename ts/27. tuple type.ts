// /** 개념 */
// // 변수
// let 멍멍: [string, boolean?, number?] = [`dog`, true];  // ?는 뒤에서 부터 채움

// // 함수
// function 함수(...x: [number, string]) {
//   return x;
// }

// console.log(함수(111, `222`));

// // 배열
// let arr = [1, 2, 3];
// let arr2: [number, number, ...number[]] = [4, 5, ...arr];

// /** 실습 */
// // 1
// type Arr = [string, number, ...boolean[]];
// let arr3: Arr = ['동서녹차', 4000, true, false, true, true, false, true];

// // 2
// function 함수2(...rest: [string, boolean, ...(number | string)[]]) {
// }

// 함수2('a', true, 6, 3, '1', 4);

// // 3
// function 함수3(...rest: (string | number)[]) {

//   let result: [string[], number[]] = [[], []];

//   rest.forEach((a) => {
//     if (typeof a === 'string') {
//       result[0].push(a);
//     } else {
//       result[1].push(a);
//     }
//   });

//   return result;
// }

// console.log(함수3('b', 5, 6, 8, 'a'));