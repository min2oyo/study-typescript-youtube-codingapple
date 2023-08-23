"use strict";
// /** Primitive Types */
// // Varable
// let 이름: string = `kim`; // string, number, boolean, bigint, null, undefined,[], {} 등
// // Array
// let 이름2: string[] = [`kim`, `park`];
// // Object
// let 이름3: { name?: string; } = { name: `kim` };  // ?는 옵션
// // Union
// let 이름4: string | number = `kim`;
// // Type
// type Name = string | number;  // type 변수명은 주로 대문자 사용
// let 이름5: Name = 123;
// // literal type
// type NameType = `kim` | `park`;
// let 이름6: NameType = `kim`;
// // Function
// function 함수(x: number): number {
//   return x * 2;
// }
// function 함수2(x: number | string) {
//   if (typeof x === 'number') {  // 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용
//     return x * 2;
//   }
// }
// // Tuple Type
// type Member = [number, boolean];
// let john: Member = [123, true];
// // Index Signature
// type Member2 = { [key: string]: string; };
// let john2: Member2 = { name: `kim`, age: `123` };
// // Class
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// // Type은 알아서 지정해주므로, 고수는 type 지정을 안 함
// let 이름: string = `kim`;
// let 나이: number = 50;
// let 결혼했니: boolean = true;
// let 결혼했니2: null = null;
// let 결혼했니3: undefined = undefined;
// let 회원들: string[] = [`kim`, `park`];
// let 회원들2: { membr1: string, member2: string; } = { membr1: `kim`, member2: `park` };
// /** 변수에 정의된 Union 타입은 할당과 동시에 OR 역할이 사라짐 */
// let 회원: number | string = 123;
// let 회원들: (number | string)[] = [1, `2`, 3];
// let 오브젝트: { a: string | number; } = { a: 123 };
// let 나이: string | number;
// // 나이 + 1; // error 남
// // 개인정보
// let user: string = 'kim';
// let age: undefined | number = undefined;
// let married: boolean = false;
// let 철수: (string | number | undefined | boolean)[] = [user, age, married];
// // 학교
// let 학교: {
//   score: (number | boolean)[],
//   teacher: string,
//   friend: string | string[];
// } = {
//   score: [100, 97, 84],
//   teacher: 'Phil',
//   friend: 'John'
// };
// 학교.score[4] = false;
// 학교.friend = ['Lee', 학교.teacher];
// let 이름: any;
// 이름 = 123;
// 이름 = [];
// console.log(typeof 이름);
// let 변수1: string = 이름;  // error 안 남
// let 이름: unknown;
// 이름 = {};
// 이름 = 123;
// // let 변수1: string = 이름;  // error 남
// // let 변수2: boolean = 이름; // error 남
// // let 변수3: number = 이름;  // error 남
// 이름[0];
// // 이름 - 1;   // error 남
// // 이름.data;  // error 남
// let 나이: unknown = 1;
// // 나이 - 1;  // error 남 // 숫자 타입이여야 숫자처럼 연산해 줌
// // return
// function 함수(x: number): number {
//   return x * 2;
// }
// // void
// function 함수2(x: number): void {
//   1 + 1;
// }
// // 이름 출력
// function sayHi(x?: string) {
//   console.log(x ? `안녕하세요 ` + x : '왜 입력 안 함?');
// }
// sayHi(`ria`);
// sayHi();
// // 자릿수세기
// function 자릿수세기(x: number | string): number {
//   return x.toString().length;
// }
// 자릿수세기(245);
// 자릿수세기(9567);
// // 결혼 가능 확률
// function 결혼가능하냐(money: number, house: boolean, charm: string): string | void {
//   let score = 0;
//   if (money >= 0) score += money;
//   if (house) score += 500;
//   if (charm === '상') score += 100;
//   if (score >= 600) return '결혼가능';
// }
// console.log(결혼가능하냐(100, true, '상'));
// /**
//   하지만 월 소득을 마이너스로 이상한 숫자를 입력하면 어쩌죠?
//   그런 것도 막으려면 코드를 어떻게 짜야할까요. 
//   마지막으로 string이 아니라 '상' '중' '하' 라는 글자만 입력할 수 있게 더욱 엄격한 타입지정도 가능한데
//   그건 Literal type 시간에 알아봅시다. 
//  */
// /** ?는 number | undefined와 같음 */
// // function
// function 함수(x?: number): void { };
// 함수();
// // object
// type Square = {
//   color?: string,
//   width: number,
// };
// let 네모: Square = {
//   width: 100
// };
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
// /**
//   Assertion 용도
//   - Narrowing 할 때 사용
//   - 무슨 타입이 들어올지 100% 확실할 때 사용
//   - 굳이 쓰지 않도록
//   - 이럴 때 사용
//     - 남이 짠 코드 수정할 떄
//     - 왜 타입에러가 나는지 모를 때
//     - 비상용
//  */
// function 내함수(x: number | string) {
//   let array: number[] = [];
//   array[0] = x as number;
// }
// 내함수(123);
// // 타입을 강제로 부여하는 기계 (Assertttion의 유용한 쓰임)
// type Person = {
//   name: string;
// };
// function 변환기<T>(data: string): T {
//   return JSON.parse(data) as T;
// }
// const jake = 변환기<Person>('{"name":"kim"}');
// type Animal = string | number | undefined;
// let 동물: Animal = 123;
// type 사람 = { name: string, age: number; };
// let teacher: 사람 = { name: `kim`, age: 20 };
// type User = { name: string, email?: string, phone: number; };
// let 회원가입정보: User = {
//   name: 'kim',
//   phone: 123,
// };
// // 1
// type Girlfriend = {
//   readonly name: string;
// };
// const 여친: Girlfriend = {
//   name: `수정`
// };
// // 여친.name = `유라`; // error
// // 2
// type MyType = {
//   color?: string,
//   size: number,
//   readonly position: number[];
// };
// let 테스트용변수: MyType = {
//   size: 123,
//   position: [1, 2, 3]
// };
// // Varable
// type Name = string;
// type Age = number;
// type Person = Name | Age;
// // Object
// type PositionX = { x: number; };
// type PositionY = { y: number; };
// type NewType = PositionX & PositionY;
// let position: NewType = { x: 10, y: 20 };
// // User
// type User = { name: string, email?: string, phone: number; };
// type Adult = { adult: boolean; };
// type NewUser = User & Adult;
// let 회원가입정보: NewUser = {
//   name: 'kim',
//   adult: false,
//   phone: 1234
// };
// /** 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입 */
// // varable
// let 접니다: `대머리` | `솔로`;
// 접니다 = `대머리`;
// // function
// function 함수(a: `hello`): 1 | 0 {
//   return 1;
// }
// function 함수2(a: `가위` | `바위` | `보`): (`가위` | `바위` | `보`)[] {
//   return [`가위`, `보`];
// }
// console.log(함수2(`가위`));
// // 문제점
// var 자료 = {
//   name: `kim`
// } as const;
// function 내함수(a: `kim`) {
// }
// 내함수(자료.name);
// /** 해결법
//     1. object 만들 때 타입 지정 확실히 하기
//     2. as 문법으로 타입 구라치기
//     3. as const 사용
//       - object value 값을 그대로 타입으로 지정해 줌
//       - object 속성들에 모두 readonly 붙여줌
//  */
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
// /** narrowing 5가지 방법 */
// // 1. 일반
// let 제목1 = document.querySelector(`#title`);
// if (제목1 != null) {
//   제목1.innerHTML = `반가워요`;
// }
// // 2. instanceof (추천)
// let 제목2 = document.querySelector(`#title`);
// if (제목2 instanceof Element) {  // Object instanceof Class
//   제목2.innerHTML = `반가워요`;
// }
// // 3. assertion
// let 제목3 = document.querySelector(`#title`) as Element;
// 제목3.innerHTML = `반가워요`;
// // 4. optional chaining
// let 제목4 = document.querySelector(`#title`);
// if (제목4?.innerHTML != undefined) {
//   제목4.innerHTML = `반가워요`;
// }
// // 5. strict mode off in tsconfig.json
// // Element 상속
// let 링크 = document.querySelector(`.link`);
// if (링크 instanceof HTMLAnchorElement) {
//   링크.href = `https://kakao.com`;
// }
// /** 
//   HTMLAnchorElement
//   - href, style, class, id
//   HTMLButtonElement
//   - <button>
//   HTMLHeadingElement
//   - <h1>
//   HTMLImageElement
//   - <img>
//  */
// // eventListener
// let 버튼 = document.querySelector(`button`);
// 버튼?.addEventListener(`click`, function () { // undefinced error 안 남
//   console.log(`안녕`);
// });
// // img
// let 이미지 = document.querySelector(`img`);
// if (이미지 instanceof HTMLImageElement) {
//   이미지.src = `change.png`;
// }
// // 링크 한 번에 변경
// let 링크2 = document.querySelectorAll('.naver');
// 링크2.forEach((a) => {
//   if (a instanceof HTMLAnchorElement) {
//     a.href = 'https://kakao.com';
//   }
// });
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
// // 1. && 연산자
// console.log(1 && null && 3);  // null
// console.log(undefined && '안녕' && 100);  // undefined
// function 함수(a: string | undefined) {
//   if (a && typeof a === `string`) { }
// }
// // 2. in 키워드
// type Fish = { swim: string; };
// type Bird = { fly: string; };
// function 함수2(animal: Fish | Bird) {
//   if (`swim` in animal) {
//     return 1;
//   }
// }
// // 3. instanceof 연산자 (object instanceof 부모 class)
// let 날짜 = new Date();
// if (날짜 instanceof Date) {
//   1;
// }
// // 4. literal type
// type Car = {
//   wheel: `4개`;
//   color: string;
// };
// type Bike = {
//   wheel: `2개`;
//   color: string;
// };
// function 함수3(x: Car | Bike) {
//   if (x.wheel === `4개`) {
//     return 1;
//   }
// }
