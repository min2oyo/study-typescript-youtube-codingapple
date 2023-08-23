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