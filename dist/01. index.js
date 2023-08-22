// Primitive Types
let 이름 = `kim`; // string, number, boolean, bigint, null, undefined,[], {} 등
// Array
let 이름2 = [`kim`, `park`];
// Object
let 이름3 = { name: `kim` }; // ?는 옵션
// Union
let 이름4 = `kim`;
let 이름5 = 123;
let 이름6 = `kim`;
// Function
function 함수(x) {
    return x * 2;
}
function 함수2(x) {
    if (typeof x === 'number') { // 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용
        return x * 2;
    }
}
let john = [123, true];
let john2 = { name: `kim`, age: `123` };
// Class
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
