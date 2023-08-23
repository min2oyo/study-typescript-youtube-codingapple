// // function
// type NumOut = (x: number, y: number) => number;

// let 함수: NumOut = function (x, y) {
//   return x + y;
// };

// // object
// let 회원정보 = {
//   name: `kim`,
//   age: 30,
//   plusOne(x: number) {
//     return x + 1;
//   },
//   changeName: () => {
//     console.log(`안녕`);
//   }
// };
// 회원정보.plusOne(1);
// 회원정보.changeName();

// // 회원정보
// type Member = {
//   name: string,
//   age: number,
//   plusOne: (x: number) => number,
//   changeName: () => void;
// };

// // 함수2개 만들고 타입 정의
// type CutType = (x: string) => string;
// let cutZero: CutType = function (x) {
//   let result = x.replace(/^0+/, "");  // '0' 문자가 있으면 제거
//   return result;
// };

// function removeDash(x: string): number {
//   let result = x.replace(/-/g, ""); // 대시기호 '-' 가 있으면 전부 제거
//   return parseFloat(result);
// }

// // 콜백함수
// type 함수타입1 = (a: string) => string;
// type 함수타입2 = (a: string) => number;

// function 만들함수(a: string, func1: 함수타입1, func2: 함수타입2) {
//   let result = func1(a);
//   let result2 = func2(result);
//   console.log(result2);
// }
// 만들함수(`010-1111-2222`, cutZero, removeDash);  // 1011112222 출력잘됨