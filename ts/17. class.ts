// // 개념
// class Person {
//   data = 0;
//   name;
//   age;
//   constructor(name: string, age = 20) { // age = 20: default parameter
//     this.name = name;
//     this.age = age;
//   }

//   함수(name: string) {
//     return `안녕, ${name}`;
//   }
// }

// let kim = new Person(`kim`);
// let park = new Person(`park`);
// console.log(kim.data);
// console.log(kim.함수(`jiwan`));

// // car
// class Car {
//   model;
//   price;
//   constructor(a: string, b: number) {
//     this.model = a;
//     this.price = b;
//   }

//   tax() {
//     return this.price * 0.1;
//   }
// }


// let car1 = new Car('소나타', 3000);
// console.log(car1); // Car { model: '소나타', price: 3000 }
// console.log(car1.tax()); // 300

// //  class Word
// class Word {

//   num;
//   str;

//   constructor(...param: (number | string)[]) {

//     let 숫자들: number[] = [];
//     let 문자들: string[] = [];

//     param.forEach((i) => {
//       if (typeof i === 'string') {
//         문자들.push(i);
//       } else {
//         숫자들.push(i);
//       }
//     });

//     this.num = 숫자들;
//     this.str = 문자들;

//   }

// }

// let obj = new Word('kim', 3, 5, 'park');
// console.log(obj.num); // [ 3, 5 ]
// console.log(obj.str); // [ 'kim', 'park' ]