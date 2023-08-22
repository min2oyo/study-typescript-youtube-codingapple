// Varable
var 이름 = "kim"; // string, number, boolean, bigint, null, undefined,[], {} 등
// Array
var 이름2 = ["kim", "park"];
// Object
var 이름3 = { name: "kim" }; // ?는 옵션
// Union
var 이름4 = "kim";
var 이름5 = 123;
var 이름6 = "kim";
// Function
function 함수(x) {
    return x * 2;
}
function 함수2(x) {
    if (typeof x === 'number') { // 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용
        return x * 2;
    }
}
var john = [123, true];
var john2 = { name: "kim", age: "123" };
// Class
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
