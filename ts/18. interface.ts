// /** 개념 */
// // interface
// interface Student {
//   name: string;
// }
// interface Teacher extends Student { // extends  // 'Student & Teacher'도 가능
//   age: number;
// }

// let 학생: Student = { name: `kim` };
// let 선생: Teacher = { name: `kim`, age: 20 };

// // type
// type Animal = { name: string; };
// type Cat = { age: number; } & Animal; // intersection type
// type Dog = { name: number; } & Animal;

// // let 멍멍이: Dog = { name: `kim` } // error

// /**중복선언
//  * - interface: 가능
//  * - type: 불가능
//  */



// /** 실습 */
// // 가전
// interface Product {
//   brand: string;
//   serialNumber: number;
//   model: string[];
// }
// let 상품: Product = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };

// // 쇼핑몰 바구니
// interface Cart {
//   product: string;
//   price: number;
// }
// let 장바구니: Cart[] = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];

// // 확장
// interface Cart {
//   product: string;
//   price: number;
// }

// interface NewCart extends Cart {
//   card: boolean;
// }
// const basket: NewCart = { product: '청소기', price: 7000, card: false };

// // 연산
// interface MathObj {
//   plus: (a: number, b: number) => number;
//   minus: (a: number, b: number) => number;
// }

// let 오브젝트: MathObj = {
//   plus(a, b) {
//     return a + b;
//   },
//   minus(a, b) {
//     return a - b;
//   }
// }; 