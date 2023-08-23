// /** 개념 */
// // rest parameter
// function 함수(...a: number[]) { // 다른 파라미터 있으면 맨 뒤에만 사용 가능
//   return a;
// }
// 함수(1, 5, 3, 5, 6, 6);

// // spread operator
// let arr = [3, 4, 5];
// let arr2 = [1, 2, ...arr];
// console.log(arr2);

// // Destructuring
// function 함수2({ student, age }: { student: boolean; age: number; }) {
//   console.log(student, age);
// }
// 함수2({ student: true, age: 20 });



// /** 실습 */
// // 최대값
// function 최댓값(...x: number[]) {
//   let result = 0;
//   x.forEach((i) => {
//     if (result < i) {
//       result = i;
//     }
//   });
//   return result;
// }
// console.log(최댓값(4, 6, 3, 2));

// // user
// type UserType = {
//   user: string,
//   comment: number[],
//   admin: boolean;
// };

// function 함수3({ user, comment, admin }: UserType) {
//   console.log(user, comment, admin);
// }

// 함수3({ user: 'kim', comment: [3, 5, 4], admin: false });

// // array
// type 어레이 = (number | string | boolean)[];

// function 함수4([a, b, c]: 어레이) {
//   console.log(a, b, c);
// }

// 함수4([40, 'wine', false]); 