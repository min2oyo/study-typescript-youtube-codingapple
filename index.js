"use strict";
const _index = () => {
    /** Primitive Types */
    // Varable
    const varable = `kim`; // string, number, boolean, bigint, null, undefined, [], {} 등
    // Array
    const array = [`kim`, `park`];
    // Object
    const object = { age: 19 }; // ?는 옵션
    // Union
    const union = `kim`;
    const word = 123;
    const who = `kim`;
    // Function
    function num(x) {
        return x * 2;
    }
    function num2(x) {
        if (typeof x === 'number') { // 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용
            return x * 2;
        }
    }
    const john = [123, true];
    const john2 = { name: `kim`, age: `123` };
    // Class
    class User {
        name;
        constructor(name) {
            this.name = name;
        }
    }
    ;
    /** light */
    varable;
    array;
    object;
    union;
    word;
    who;
    num;
    num2;
    john;
    john2;
    User;
};
_index();
const _primitive_types = () => {
    /** 개념 */
    // Type은 알아서 지정되므로, 고인물은 type 안 씀
    const name = `kim`;
    const age = 50;
    const isMarried = true;
    const home = null;
    const money = undefined;
    const furniture = [`kim`, `park`];
    const members = { membr1: `kim`, member2: `park` };
    /** light */
    name;
    age;
    isMarried;
    home;
    money;
    furniture;
    members;
};
_primitive_types();
const _union_type = () => {
    /** 개념 */
    // union
    const number = 123; // 변수에 정의된 Union 타입은 할당과 동시에 OR 역할이 사라짐
    const numbers = [1, `2`, 3];
    const object = { a: 123 };
    // 선언
    let what;
    // what + 1; // error 남
    // 개인정보
    const user = 'kim';
    const age = undefined;
    const married = false;
    const luna = [user, age, married];
    // school
    const school = {
        score: [100, 97, 84],
        teacher: 'Phil',
        friend: 'John'
    };
    school.score[4] = false;
    school.friend = ['Lee', school.teacher];
    console.log(school);
    // {
    //   score: [100, 97, 84, <1 empty item >, false],
    //   teacher: 'Phil',
    //   friend: ['Lee', 'Phil'];
    // }
    /** light */
    number;
    numbers;
    object;
    what = ``;
    luna;
};
_union_type();
const _any = () => {
    /** 개념 */
    let age;
    age = 123;
    age = [];
    console.log(typeof age); // object
    const newAge = age; // error 안 남
    console.log(typeof newAge); // object
    console.log(newAge); // []
};
_any();
const _unknown = () => {
    /** 개념 */
    let name;
    name = {};
    name = 123;
    // const str: string = name;  // error
    // const bln: boolean = name; // error
    // const num: number = name;  // error
    // name[0];    // 왜 error 나지?
    // name - 1;   // error
    // name.data;  // error
    const age = 1;
    // age - 1;  // error // 숫자 타입이여야 숫자처럼 연산해 줌
    /** light */
    age;
};
_unknown();
const _function = () => {
    /** 개념 */
    // return
    function numNum(x) {
        return x * 2;
    }
    // void
    function numVoid(x) {
        1 + x;
    }
    /** 실습 */
    // 이름 출력
    function sayHi(x) {
        console.log(x ? `안녕하세요 ` + x : '왜 입력 안 함?'); // 삼항식
    }
    sayHi(`ria`); // 안녕하세요 ria
    sayHi(); // 왜 입력 안 함?
    // 자릿수 세기
    function length(x) {
        return x.toString().length;
    }
    console.log(length(245)); // 3
    console.log(length(9567)); // 4
    // 결혼 가능 확률
    function canYouGetMarried(money, house, charm) {
        let score = 0;
        if (money >= 0)
            score += money;
        else
            return `소득 제대로 입력하셈`;
        if (house)
            score += 500;
        if (charm === `상`)
            score += 100;
        if (score >= 600)
            return `결혼가능`;
    }
    console.log(canYouGetMarried(100, true, `상`)); // 결혼가능
    console.log(canYouGetMarried(-100, true, `상`)); // 소득 제대로 입력하셈
    /**
      하지만 월 소득을 마이너스로 이상한 숫자를 입력하면 어쩌죠?
      그런 것도 막으려면 코드를 어떻게 짜야할까요. (해결함)
      마지막으로 string이 아니라 '상' '중' '하' 라는 글자만 입력할 수 있게 더욱 엄격한 타입지정도 가능한데
      그건 Literal type 시간에 알아봅시다.
     */
    /** light */
    numNum;
    numVoid;
};
_function();
const _undefined = () => {
    /** 개념 */
    // function
    function numVoid(x) {
        x;
    }
    ;
    const square = {
        width: 100
    };
    console.log(square); // { width: 100 }
    /** light */
    numVoid();
    square;
};
_undefined();
const _narrowing = () => {
    /** 개념 */
    // 예시
    // Narrowing 판정 문법: typeof 변수 | 속성명 in 오브젝트자료 | 인스턴스 instanceof 부모
    function myFunc(x) {
        if (typeof x === `number`)
            return x + 1;
        else if (typeof x === `string`)
            return x + `1`;
        else
            0;
    }
    console.log(myFunc(123)); // 124
    console.log(myFunc(`123`)); // 1231
    // 1. && 연산자
    console.log(1 && null && 3); // null
    // console.log(undefined && '안녕' && 100);  // undefined
    const func1 = (a) => {
        if (a && typeof a === `string`) {
            return 1;
        }
    };
    console.log(func1(`hi`)); // 1
    const func2 = (animal) => {
        if (`swim` in animal) {
            return 1;
        }
    };
    console.log(func2({ swim: `hi` })); // 1
    // 3. instanceof 연산자 (object instanceof 부모 class)
    const date = new Date();
    const func3 = () => {
        if (date instanceof Date) {
            return 1;
        }
    };
    console.log(func3()); // 1
    const func4 = (a) => {
        if (a.wheel === `4개`) {
            return 1;
        }
    };
    console.log(func4({ wheel: `4개`, color: `hi` })); // 1
    /** 실습 */
    // 숫자 변환
    function cleanFunc(param) {
        const cleaned = [];
        param.forEach((item) => {
            const condition = typeof item === `string`;
            cleaned.push(condition ? parseFloat(item) : item);
        });
        return cleaned;
    }
    console.log(cleanFunc([123, '3'])); // [ 123, 3 ]
    // 최종 과목
    const cheolsu = { subject: 'math' };
    const younghee = { subject: ['science', 'english'] };
    const minsu = { subject: ['science', 'art', 'korean'] };
    function makeFunc(param) {
        if (typeof param.subject === 'string') {
            return param.subject;
        }
        else if (Array.isArray(param.subject)) {
            return param.subject[param.subject.length - 1];
        }
        else {
            return '없쪄';
        }
    }
    console.log(makeFunc(cheolsu)); // math
    console.log(makeFunc(younghee)); // english
    console.log(makeFunc(minsu)); // korean
    // console.log(makeFunc({ hello: 'hi' }));  // type error
    /** light */
    cheolsu;
    younghee;
    minsu;
};
_narrowing();
/**
  Assertion 용도
  - Narrowing 할 때 사용
  - 무슨 타입이 들어올지 100% 확실할 때 사용
  - 굳이 쓰지 않도록
  - 이럴 때 사용
    - 남이 짠 코드 수정할 떄
    - 왜 타입에러가 나는지 모를 때
    - 비상용
*/
const _assertion = () => {
    /** 개념 */
    function myFucn(param) {
        const array = [];
        array[0] = param;
        console.log(array);
    }
    myFucn(123); // [ 123 ]
    function change(data) {
        return JSON.parse(data);
    }
    const jake = change(`{"name":"kim"}`);
    console.log(jake); // { name: 'kim' }
};
_assertion();
const _type_alias = () => {
    /** 개념 */
    const animal = 123;
    const teacher = {
        name: `kim`,
        age: 20,
    };
    const user = {
        name: 'kim',
        phone: 123,
    };
    /** light */
    animal;
    teacher;
    user;
};
_type_alias();
const _readonly = () => {
    /** 개념 */
    const girlfriend = {
        name: `수정`
    };
    const test = {
        size: 123,
        position: [1, 2, 3]
    };
    /** light */
    girlfriend;
    test;
};
_readonly();
const _type_alias_extend = () => {
    /** 개념 */
    const position = { x: 10, y: 20 };
    const member = {
        name: 'kim',
        adult: false,
        phone: 1234
    };
    /** light */
    const person = ``;
    person;
    position;
    member;
};
_type_alias_extend();
/** 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입
 
  해결법
  1. object 만들 때 타입 지정 확실히 하기
  2. as 문법으로 타입 구라치기
  3. as const 사용
    - object value 값을 그대로 타입으로 지정해 줌
    - object 속성들에 모두 readonly 붙여줌

*/
const _literal_type = () => {
    /** 개념 */
    // varable
    let me;
    me = `대머리`;
    // function
    function func1(param) {
        param;
        return 1;
    }
    console.log(func1(`hello`));
    function fucn2(param) {
        param;
        return [`가위`, `보`];
    }
    console.log(fucn2(`가위`)); // [ '가위', '보' ]
    // 문제점
    const data = {
        name: `kim`
    }; // 정확히 명시?
    function myFunc(param) {
        param;
    }
    myFunc(data.name); // as const 안 하면 error
};
_literal_type();
const _function_type = () => {
    /** 개념 */
    const func = function (x, y) {
        return x + y;
    };
    console.log(func(1, 2)); // 3
    /** 실습 */
    // object
    const user = {
        name: `kim`,
        age: 30,
        plusOne(x) {
            return x + 1;
        },
        changeName: () => {
            console.log(`안녕`);
        }
    };
    console.log(user.plusOne(1)); // 2
    user.changeName(); // 안녕
    const member = {
        name: `ria`,
        age: 21,
        plusOne: (x) => x,
        changeName: () => { }
    };
    const cutZero = x => {
        return x.replace(/^0+/, ""); // '0' 문자가 있으면 제거
    };
    const removeDash = x => {
        return parseFloat(x.replace(/-/g, "")); // 대시기호 '-' 가 있으면 전부 제거
    };
    const makeFunc = (x, cutZero, removeDash) => {
        return removeDash(cutZero(x));
    };
    console.log(makeFunc(`010-1111-2222`, cutZero, removeDash)); // 1011112222
    /** light */
    member;
};
_function_type();
/** narrowing 5가지 방법 */
// 1. 일반
const subject1 = document.querySelector(`#title`);
if (subject1 != null) {
    subject1.innerHTML += ` 반가워요1`;
}
// 2. instanceof (추천)
const subject2 = document.querySelector(`#title`);
if (subject2 instanceof Element) { // Object instanceof Class
    subject2.innerHTML += ` 반가워요2`;
}
// 3. assertion
const subject3 = document.querySelector(`#title`);
subject3.innerHTML += ` 반가워요3`;
// 4. optional chaining
const subject4 = document.querySelector(`#title`);
if (subject4?.innerHTML != undefined) {
    subject4.innerHTML += ` 반가워요4`;
}
// 5. strict mode off in tsconfig.json
// Element 상속
const link = document.querySelector(`.link`);
if (link instanceof HTMLAnchorElement) {
    link.href = `https://kakao.com`;
}
/**
  HTMLAnchorElement
  - href, style, class, id
  HTMLButtonElement
  - <button>
  HTMLHeadingElement
  - <h1>
  HTMLImageElement
  - <img>
 */
// eventListener
const button = document.querySelector(`button`);
button?.addEventListener(`click`, () => {
    alert(`안녕`);
});
// img
const img = document.querySelector(`img`);
if (img instanceof HTMLImageElement) {
    img.src = `/images/change.png`;
}
// link 한 번에 변경
const links = document.querySelectorAll('.naver');
links.forEach((x) => {
    if (x instanceof HTMLAnchorElement) {
        x.href = 'https://kakao.com';
    }
});
const _class = () => {
    /** 개념 */
    class Person {
        data = 0;
        name;
        age;
        constructor(name, age = 20) {
            this.name = name;
            this.age = age;
        }
        func(name) {
            return `안녕, ${name}`;
        }
    }
    const kim = new Person(`kim`);
    const park = new Person(`park`);
    console.log(kim.data); // 0
    console.log(kim.func(`jiwan`)); // 안녕, jiwan
    console.log(park); // Person { data: 0, name: 'park', age: 20 }
    /** 실습 */
    // car
    class Car {
        model;
        price;
        constructor(x, y) {
            this.model = x;
            this.price = y;
        }
        tax() {
            return this.price * 0.1;
        }
    }
    const car = new Car('소나타', 3000);
    console.log(car); // Car { model: '소나타', price: 3000 }
    console.log(car.tax()); // 300
    //  class Word
    class Word {
        num;
        str;
        constructor(...param) {
            const numbers = [];
            const strings = [];
            param.forEach(i => {
                if (typeof i === 'string') {
                    strings.push(i);
                }
                else {
                    numbers.push(i);
                }
            });
            this.num = numbers;
            this.str = strings;
        }
    }
    const word = new Word('kim', 3, 5, 'park');
    console.log(word.num); // [ 3, 5 ]
    console.log(word.str); // [ 'kim', 'park' ]
};
_class();
/** 중복선언
    - interface: 가능
    - type: 불가능
 */
const _interface = () => {
    /** 개념 */
    const student = { name: `kim` };
    const teacher = { name: `kim`, age: 20 };
    const cat = { name: `kim`, age: 2 };
    const dog = { name: `kim` };
    const product = {
        brand: 'Samsung',
        serialNumber: 1360,
        model: ['TV', 'phone']
    };
    const cart = [
        {
            product: '청소기',
            price: 7000
        },
        {
            product: '삼다수',
            price: 800
        }
    ];
    const basket = {
        product: '청소기',
        price: 7000,
        card: false
    };
    const obj = {
        plus(x, y) { return x + y; },
        minus(x, y) { return x - y; }
    };
    /** light */
    student;
    teacher;
    cat;
    dog;
    product;
    cart;
    basket;
    obj;
};
_interface();
const _rest_parameter = () => {
    /** 개념 */
    // rest parameter
    const func = (...a) => {
        return a;
    };
    console.log(func(1, 5, 3, 5, 6, 6)); // [ 1, 5, 3, 5, 6, 6 ]
    // spread operator
    const arr1 = [3, 4, 5];
    const arr2 = [1, 2, ...arr1];
    console.log(arr2); // [ 1, 2, 3, 4, 5 ]
    /** 실습 */
    // 최대값
    const maxNum = (...a) => {
        let result = 0;
        a.forEach(i => {
            if (result < i) {
                result = i;
            }
        });
        return result;
    };
    console.log(maxNum(4, 6, 3, 2)); // 6
};
_rest_parameter();
const _destructuring = () => {
    const func = ({ student, age }) => {
        console.log(student, age); // true 20
    };
    func({ student: true, age: 20 });
    ;
    const func1 = ({ user, comment, admin }) => {
        console.log(user, comment, admin);
    };
    func1({ user: 'kim', comment: [3, 5, 4], admin: false }); // kim [ 3, 5, 4 ] false
    const func2 = ([a, b, c]) => {
        console.log(a, b, c);
    };
    func2([40, 'wine', false]); // 40 wine false
};
_destructuring();
/**
 * 조건
 * 1. return 값이 없어야 함
 * 2. endpoint가 없어야 함 (1번 충족)
 *
 * 실제로는
 * - 쓸데 없음
 * - void 쓰셈
 * - 코드 이상하게 짤 때 출몰하는 거임
 */
const _never = () => {
    /** 개념 */
    // 1. error
    function func1() {
        throw new Error(); // 코드 실행 중단
    }
    // 2. 무한루프
    function func2() {
        while (true) {
            console.log(1);
        }
    }
    // 3. 경로
    function func3(parameter) {
        if (typeof parameter === `string`) {
            parameter; // type: string
        }
        else {
            parameter; // type: never
        }
    }
    // 4. func 표현식 (func 선언문(function func4(){})는 void로 나옴)
    const func4 = function () {
        throw new Error();
    };
    /** light */
    func1;
    func2;
    func3;
    func4;
};
_never();
/** 오리지널 자바스크립트 문법에서도 #이걸 속성옆에 붙이면 private 속성이 됩 */
const _private = () => {
    /** 개념 */
    // user
    class User {
        name; // 모든 child들이 이용 가능  // 생략 가능
        familyName = `kim`;
        constructor(name) {
            this.name = `${name} ${this.familyName}`;
        }
        changeSecret() {
            this.familyName = `park`;
        }
    }
    const user = new User(`ria`);
    // user.familyName;  // 사용 못 함
    user.changeSecret(); // 사용 가능
    console.log(user); // User { familyName: 'park', name: 'ria kim' }
    // 축약
    class Person {
        name;
        constructor(name) {
            this.name = name;
        }
        ;
    }
    const child = new Person(`kim`);
    console.log(`child`, child); // child Person { name: 'kim' }
};
_private();
const _protected = () => {
    /** 개념 */
    class User {
        x = 10; // private 기능에서 extends된 class에서도 사용 가능
    }
    class NewUser extends User {
        doThis() {
            this.x = 20; // 사용 가능
        }
    }
    const person = new NewUser();
    console.log(person); // NewUser { x: 10 }
};
_protected();
const _static = () => {
    /** 개념 */
    // user
    class Parent {
        static x = 10; // 부모 class에 직접 부여됨 // 자식에게 안 물려 줌
        y = 20;
    }
    const child = new Parent();
    console.log(child); // Parent { y: 20 }
    /**
     *  추가
     *  - 함수도 static 붙이기 가능
     *  - extends로 class를 복사할 경우 static 붙은 것들도 따라옴
     */
    // Ability
    class Ability {
        static skill = `js`;
        intro = Ability.skill + `전문가입니다.`;
    }
    const cheolsu = new Ability();
    console.log(cheolsu); // Ability { intro: 'js전문가입니다.' }
    Ability.skill = `ts`;
    const younghee = new Ability();
    console.log(younghee); // Ability { intro: 'ts전문가입니다.' }
    /** 실습 */
    // 1
    class Number {
        static x = 10;
        static y = 20;
        z = 30;
    }
    // console.log(Number.x); // errer
    console.log(Number.y); // 20
    // console.log(Number.z); // errer
    /**
     *   x,y 속성의 특징
     *   1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만
     *      x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만
     *      접근해서 쓸 수 있습니다. User의 자식들은 x와 y를 쓸 수 없습니다.
     *   2. private static x는 class 내부에서만 수정가능합니다.
     *   3. public static y는 class 내부 외부 상관없이 수정가능합니다.
     *      public 키워드 지워도 똑같이 동작할 듯
     *   4. protected z는 private 키워드와 유사하게 class 내부에서만
     *      사용이 가능한데 약간 범위가 넓어서 extends로 복사한 class 내부에서도
     *      사용할 수 있습니다.
     */
    // 2
    class Operator {
        static x = 10;
        static y = 20;
        static addOne(a) {
            return Operator.x += a;
        }
        static printX() {
            console.log(Operator.x);
        }
    }
    console.log(Operator.addOne(3)); // 13  // 이렇게 하면 x가 3 더해져야 함
    console.log(Operator.addOne(4)); // 17  // 이렇게 하면 x가 4 더해져야 함
    Operator.printX(); // 17  // 이렇게 하면 콘솔창에 x값이 출력되어야 함
    // 3
    class Square {
        width;
        height;
        color;
        constructor(width, height, color) {
            this.width = width;
            this.height = height;
            this.color = color;
        }
        draw() {
            const a = Math.random();
            const square = `
        <div style="
          position: relative;
          top: ${a * 400}px;
          left: ${a * 400}px;
          width: ${this.width}px;
          height: ${this.height}px;
          background:${this.color}">
        </div>
      `;
            document.body.insertAdjacentHTML('beforeend', square);
        }
    }
    const square = new Square(30, 30, 'red');
    square.draw();
    square.draw();
    square.draw();
    square.draw();
};
_static();
/** Run Code 실행이 안 됨 */
// import { Age, Car, Name, ObjFunction } from "./types"; // 전역 사용으로 import 생략 가능
const _import = () => {
    /** 개념 */
    const name = `park`;
    const age = a => a + 10;
    /** 실습 */
    // 1
    const car = {
        wheel: 4,
        model: `Sonata`,
    };
    // 2
    const func = a => {
        console.log(a);
    };
    func({ abc: `hi` });
    /** light */
    name;
    age;
    car;
};
_import();
const _generic = () => {
    /** 개념 */
    // generic
    const func1 = (x) => {
        return x[0];
    };
    const a = func1([4, 2]);
    const b = func1([`4`, `2`]); // Type 자동 설정
    console.log(a); // 4
    console.log(b); // 4
    // constraints
    const func2 = (x) => {
        return x - 1;
    };
    const c = func2(100);
    console.log(c); // 99
    const func3 = (x) => {
        return x.length;
    };
    const d = func3(`100`);
    const e = func3([`100`]);
    console.log(d); // 3
    console.log(e); // 1
    // class
    class Hi {
    }
    /** 실습 */
    // 갯수 구하기
    const func4 = (x) => {
        console.log(x.length);
    };
    func4('hello'); // 5
    func4(['kim', 'park']); // 2
    const data = `{"name" : "dog", "age" : 1 }`;
    const func5 = (data) => {
        return JSON.parse(data);
    };
    console.log(func5(data)); // { name: 'dog', age: 1 }
    // class
    class Person {
        name;
        constructor(a) {
            this.name = a;
        }
    }
    const person = new Person('어쩌구');
    console.log(person.name); // 어쩌구
};
_generic();
const _tuple_type = () => {
    /** 개념 */
    // 변수
    const bark = [`dog`, true]; // ?는 뒤에서 부터 채움
    // 함수
    const func = (...x) => {
        return x;
    };
    console.log(func(111, `222`)); // [ 111, `222` ]
    // 배열
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, ...arr1];
    console.log(arr2); // [ 4, 5, 1, 2, 3 ]
    const arr3 = [`동서녹차`, 4000, true, false, true, true, false, true];
    // 2
    const func2 = (...rest) => {
        return rest;
    };
    console.log(func2(`a`, true, 6, 3, `1`, 4)); // [ 'a', true, 6, 3, '1', 4 ]
    // 3
    const func3 = (...rest) => {
        const result = [[], []];
        rest.forEach((a) => {
            if (typeof a === `string`) {
                result[0].push(a);
            }
            else {
                result[1].push(a);
            }
        });
        return result;
    };
    console.log(func3(`b`, 5, 6, 8, `a`)); // [ [ 'b', 'a' ], [ 5, 6, 8 ] ]
    /** light */
    bark;
    arr3;
};
_tuple_type();
console.log(data_a);
const _declare = () => {
    /** 로컬 모듈을 글로벌 하게 쓰고 싶을 때 사용 */
    // declare global {
    //   type Dog = string;
    // }
    // export { }
};
_declare;
const _implements = () => {
    class Car {
        model;
        price = 1000;
        constructor(a) {
            this.model = a;
        }
    }
    const car = new Car('morning');
    console.log(car); // Car { price: 1000, model: 'morning' }
};
_implements();
const _object_index_signatures = () => {
    const user = {
        name: `kim`,
        age: 20,
        location: `seoul`
    };
    const css = {
        'font-size': {
            'font-size': {
                'font-size': 14
            }
        }
    };
    const obj = {
        model: 'k5',
        brand: 'kia',
        price: 6000,
        year: 2030,
        date: '6월',
        percent: '5%',
        dealer: '김차장',
    };
    const obj2 = {
        'font-size': 10,
        'secondary': {
            'font-size': 12,
            'third': {
                'font-size': 14
            }
        }
    };
    /** light */
    user;
    obj;
    css;
    obj2;
};
_object_index_signatures();
const _keyof = () => {
    /** 개념 */
    // key 조회
    const obj = { name: `kim`, age: 20 };
    console.log(Object.keys(obj)); // [ 'name', 'age' ]
    const a = `name`;
    const a2 = `name`;
    const a3 = `name2`;
    const a4 = 1;
    const obj2 = {
        color: 'red',
        model: 'kia',
        price: '300',
    };
    /** light */
    a;
    a2;
    a3;
    a4;
    obj2;
};
_keyof();
const _infer = () => {
    let a; // string
    let a2; // unknown
    let age1; // string
    let age2; // any
    let age3; // string
    let age4; // unknown
    /** light */
    a = ``;
    a2;
    age1 = ``;
    age2;
    age3 = ``;
    age4;
};
_infer();
/** 전역 사용으로 export 생략 가능 */
var BadDog;
(function (BadDog) {
    ;
})(BadDog || (BadDog = {}));
const dog1 = 'bark';
const dog2 = { name: 'paw' };
