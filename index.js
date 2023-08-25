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
// /**
//  * 조건
//  * 1. return 값이 없어야 함
//  * 2. endpoint가 없어야 함 (1번 충족)
//  *
//  * 실제로는
//  * - 쓸데 없음
//  * - void 쓰셈
//  * - 코드 이상하게 짤 때 출몰하는 거임
//  */
// // error
// function 함수(): never {
//   throw new Error();  // 코드 실행 중단
// }
// // 무한루프
// function 함수2(): never {
//   while (true) {
//     console.log(1);
//   }
// }
// // 경로
// function 함수3(parameter: string) {
//   if (typeof parameter === `string`) {
//     parameter;  // type: string
//   } else {
//     parameter;  // type: never
//   }
// }
// // 함수 표현식 (함수 선언문(function 함수4(){})는 void로 나옴)
// let 함수4 = function () { // type: never
//   throw new Error();
// };
// /** 오리지널 자바스크립트 문법에서도 #이걸 속성옆에 붙이면 private 속성이 됩 */
// // 개념
// class User {
//   public name;  // 모든 자식들이 이용 가능  // 생략 가능
//   private familyName = `kim`;
//   constructor(name: string) {
//     this.name = name + this.familyName;
//   }
//   changeSecret() {
//     this.familyName = `park`;
//   }
// }
// let 유저1 = new User(`park`);
// // 유저1.familyName;  // 사용 못 함
// 유저1.changeSecret(); // 사용 가능
// // 축약
// class Person {
//   constructor(public name: string) { };
// }
// let 자식 = new Person(`kim`);
// console.log(`자식`, 자식);
// // 개념
// class User {
//   protected x = 10; // private 기능에서 extends된 class에서도 사용 가능
// }
// class NewUser extends User {
//   doThis() {
//     this.x = 20;  // 사용 가능
//   }
// }
// let 사람 = new NewUser();
// console.log(사람);  // NewUser { x: 10 }
// // 개념 1
// class User {
//   private static x = 10;  // 부모 class에 직접 부여됨 // 자식에게 안 물려 줌
//   y = 20;
// }
// let 자식 = new User();
// console.log(자식);  // User { y: 20 }
// /**
//  *  추가
//  *  - 함수도 static 붙이기 가능
//  *  - extends로 class를 복사할 경우 static 붙은 것들도 따라옴
//  */
// // 개념 2
// class User2 {
//   static skill = `js`;
//   intro = User2.skill + `전문가입니다.`;
// }
// let 철수 = new User2();
// console.log(철수);  // User2 { intro: 'js전문가입니다.' }
// User2.skill = `ts`;
// let 철수2 = new User2();
// console.log(철수2); // User2 { intro: 'ts전문가입니다.' }
// /** 실습 */
// // 설명
// class User3 {
//   private static x = 10;
//   public static y = 20;
//   protected z = 30;
// }
// /**
//  *   x,y 속성의 특징
//  *   1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만
//  *      x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만
//  *      접근해서 쓸 수 있습니다. User의 자식들은 x와 y를 쓸 수 없습니다.
//  *   2. private static x는 class 내부에서만 수정가능합니다.
//  *   3. public static y는 class 내부 외부 상관없이 수정가능합니다.
//  *      public 키워드 지워도 똑같이 동작할 듯
//  *   4. protected z는 private 키워드와 유사하게 class 내부에서만
//  *      사용이 가능한데 약간 범위가 넓어서 extends로 복사한 class 내부에서도
//  *      사용할 수 있습니다.
//  */
// // 2
// class User4 {
//   private static x = 10;
//   public static y = 20;
//   static addOne(파라미터: number) {
//     User4.x += 파라미터;
//   }
//   static printX() {
//     console.log(User4.x);
//   }
// }
// User4.addOne(3); //이렇게 하면 x가 3 더해져야함
// User4.addOne(4); //이렇게 하면 x가 4 더해져야함
// User4.printX();  //이렇게 하면 콘솔창에 x값이 출력되어야함
// // 3
// class Square {
//   constructor(public width: number, public height: number, public color: string) {
//   }
//   draw() {
//     let a = Math.random();
//     let square = `
//       <div style="
//         position: relative;
//         top: ${a * 400}px;
//         left: ${a * 400}px;
//         width: ${this.width}px;
//         height: ${this.height}px;
//         background:${this.color}">
//       </div>
//     `;
//     document.body.insertAdjacentHTML('beforeend', square);
//   }
// }
// let 네모 = new Square(30, 30, 'red');
// 네모.draw();
// 네모.draw();
// 네모.draw();
// 네모.draw();
// // import { Age, Car, Name, ObjFunction } from "./types"; // 전역 사용으로 import 생략 가능
// // 개념
// const name2: Name = `park`;
// const age: Age = a => a + 10;
// // 실습 1
// const car: Car = { wheel: 4, model: `Sonata` };
// // 실습 2
// const 함수: ObjFunction = function (a) {
//   console.log(a);
// };
// 함수({ abc: '안뇽' });
// /** 개념 */
// // generic
// function 함수<T>(x: T[]) {  // 2개 이상 넣을 수도 있음
//   return x[0];
// }
// let a = 함수<number>([4, 2]);
// let b = 함수([`4`, `2`]); // Type 자동 설정
// // constraints
// function 함수2<T extends number>(x: T) {
//   return x - 1;
// }
// let c = 함수2<number>(100);
// // custom type
// interface LengthCheck {
//   length: number;
// }
// function 함수3<T extends LengthCheck>(x: T) {
//   return x.length;
// }
// let d = 함수3<string>(`100`);
// let e = 함수3<string[]>([`100`]);
// // class
// class Hi<T> { }
// // type
// type Age<T> = T;
// /** 실습 */
// // 갯수 구하기
// function 함수4<T extends string | string[]>(x: T) {
//   console.log(x.length);
// }
// 함수4<string>('hello');
// 함수4<string[]>(['kim', 'park']);
// // 동물
// interface Animal {
//   name: string;
//   age: number;
// }
// let data = '{"name" : "dog", "age" : 1 }';
// function 함수5<T>(data: string): T {
//   return JSON.parse(data);
// }
// console.log(함수5<Animal>(data));
// // class
// class Person<T> {
//   name;
//   constructor(a: T) {
//     this.name = a;
//   }
// }
// let f = new Person<string>('어쩌구');
// f.name;
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
// /** 개념 */
// declare const data_a: number; // data.js에 있는 변수  // tsconfig.json의 allowJs를 키면 declare안 써도 된다는데, 그래도 어떤 다른 오류남
// console.log(data_a);
// /** 로컬 모듈을 글로벌 하게 쓰고 싶을 때 사용 */
// // declare global {
// //   type Dog = string;
// // }
// // export { }
// interface CarType {
//   model: string,
//   price: number;
//   // color: string,
//   // tax: (price: number) => number;
// }
// class Car2 implements CarType { // interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻
//   model: string;
//   price: number = 1000;
//   constructor(a: string) {
//     this.model = a;
//   }
//   // color;  // any type
//   // tax(a) {   ///a 파라미터는 any 타입됨 
//   //   return a * 0.1;
//   // }
// }
// let 붕붕이 = new Car2('morning');
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
/** 전역 사용으로 export 생략 가능 */
var BadDog;
(function (BadDog) {
    ;
})(BadDog || (BadDog = {}));
const dog1 = 'bark';
const dog2 = { name: 'paw' };
