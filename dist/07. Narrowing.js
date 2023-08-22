// /** Narrowing 판정 문법: typeof 변수, 속성명 in 오브젝트자료, 인스턴스 instanceof 부모 */
// function 내함수(x: number | string) {
//   if (typeof x === `number`) return x + 1;
//   else if (typeof x === `string`) return x + `1`;
//   else 0;
// }
// console.log(내함수(123));
// // 숫자 변환
// function 클리닝함수(a: (number | string)[]) {
//   let 클리닝완료된거: number[] = [];
//   a.forEach((b) => {
//     if (typeof b === 'string') {
//       클리닝완료된거.push(parseFloat(b));
//     } else {
//       클리닝완료된거.push(b);
//     }
//   });
//   return 클리닝완료된거;
// }
// console.log(클리닝함수([123, '3']));
// // 과목
// let 철수쌤 = { subject: 'math' };
// let 영희쌤 = { subject: ['science', 'english'] };
// let 민수쌤 = { subject: ['science', 'art', 'korean'] };
// function 만들함수(x: { subject: string | string[]; }) {
//   if (typeof x.subject === 'string') {
//     return x.subject;
//   } else if (Array.isArray(x.subject)) {
//     return x.subject[x.subject.length - 1];
//   } else {
//     return '없쪄';
//   }
// }
// console.log(만들함수({ subject: 'math' }));
// console.log(만들함수({ subject: ['science', 'art', 'korean'] }));
// console.log(만들함수({ subject: ['english', 'art'] }));
// // console.log(만들함수({ hello: 'hi' }));  // type error
