// /** 개념 */
// // index signatures
// interface StringOnly {
//   [key: string]: string | number,
//   age: number,
// }

// let user: StringOnly = {
//   name: `kim`,
//   age: 20,
//   location: `seoul`
// };

// // Recursive Index Signatures
// interface MyType {
//   'font-size': MyType | number;
// }

// let css: MyType = {
//   'font-size': {
//     'font-size': {
//       'font-size': 14
//     }
//   }
// };

// /** 실습 */
// // 1
// type Car2 = {
//   [key: string]: number | string;
// };

// let obj: Car2 = {
//   model: 'k5',
//   brand: 'kia',
//   price: 6000,
//   year: 2030,
//   date: '6월',
//   percent: '5%',
//   dealer: '김차장',
// };

// // 2
// interface MyType2 {
//   [key: string]: number | MyType2,
//   'font-size': number,
// }

// let obj2: MyType2 = {
//   'font-size': 10,
//   'secondary': {
//     'font-size': 12,
//     'third': {
//       'font-size': 14
//     }
//   }
// };