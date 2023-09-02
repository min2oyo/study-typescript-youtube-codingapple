"use strict";
const _index = () => {
    /** Primitive Types */
    // Varable
    const varable = `kim`; // string, number, boolean, bigint, null, undefined,[], {} 등
    // Array
    const array = [`kim`, `park`];
    // Object
    const object = { name: `kim` }; // ?는 옵션
    // Union
    const union = `kim`;
    const 이름5 = 123;
    const 이름6 = `kim`;
    // Function
    function 함수(x) {
        return x * 2;
    }
    function 함수2(x) {
        if (typeof x === 'number') { // 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용
            return x * 2;
        }
    }
    const john = [123, true];
    const john2 = { name: `kim`, age: `123` };
    // Class
    class User {
        constructor(name) {
            this.name = name;
        }
    }
    ;
};
_index();
const _primitive_types = () => {
    /** 개념 */
    // Type은 알아서 지정해주므로, 고인물은 type 안 씀
    const name = `kim`;
    const age = 50;
    const isMarried1 = true;
    const isMarried2 = null;
    const isMarried3 = undefined;
    const members1 = [`kim`, `park`];
    const members2 = { membr1: `kim`, member2: `park` };
    // light
    name;
    age;
    isMarried1;
    isMarried2;
    isMarried3;
    members1;
    members2;
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
    const jia = [user, age, married];
    // 학교
    const 학교 = {
        score: [100, 97, 84],
        teacher: 'Phil',
        friend: 'John'
    };
    학교.score[4] = false;
    학교.friend = ['Lee', 학교.teacher];
};
_union_type();
const _any = () => {
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
    let 이름;
    이름 = {};
    이름 = 123;
    // let 변수1: string = 이름;  // error 남
    // let 변수2: boolean = 이름; // error 남
    // let 변수3: number = 이름;  // error 남
    // 이름[0];    // 왜 error 나지?
    // 이름 - 1;   // error 남
    // 이름.data;  // error 남
    let 나이 = 1;
    // 나이 - 1;  // error 남 // 숫자 타입이여야 숫자처럼 연산해 줌
};
_unknown();
const _function = () => {
    // return
    function 함수(x) {
        return x * 2;
    }
    // void
    function 함수2(x) {
        1 + 1;
    }
    // 이름 출력
    function sayHi(x) {
        console.log(x ? `안녕하세요 ` + x : '왜 입력 안 함?');
    }
    sayHi(`ria`);
    sayHi();
    // 자릿수세기
    function 자릿수세기(x) {
        return x.toString().length;
    }
    자릿수세기(245);
    자릿수세기(9567);
    // 결혼 가능 확률
    function 결혼가능하냐(money, house, charm) {
        let score = 0;
        if (money >= 0)
            score += money;
        if (house)
            score += 500;
        if (charm === '상')
            score += 100;
        if (score >= 600)
            return '결혼가능';
    }
    console.log(결혼가능하냐(100, true, '상'));
    /**
      하지만 월 소득을 마이너스로 이상한 숫자를 입력하면 어쩌죠?
      그런 것도 막으려면 코드를 어떻게 짜야할까요.
      마지막으로 string이 아니라 '상' '중' '하' 라는 글자만 입력할 수 있게 더욱 엄격한 타입지정도 가능한데
      그건 Literal type 시간에 알아봅시다.
     */
};
_function();
const _undefined = () => {
    /** ?는 number | undefined와 같음 */
    // function
    function 함수(x) { }
    ;
    함수();
    let 네모 = {
        width: 100
    };
};
_undefined();
const _narrowing = () => {
    /** Narrowing 판정 문법: typeof 변수, 속성명 in 오브젝트자료, 인스턴스 instanceof 부모 */
    function 내함수(x) {
        if (typeof x === `number`)
            return x + 1;
        else if (typeof x === `string`)
            return x + `1`;
        else
            0;
    }
    console.log(내함수(123));
    // 숫자 변환
    function 클리닝함수(a) {
        let 클리닝완료된거 = [];
        a.forEach((b) => {
            if (typeof b === 'string') {
                클리닝완료된거.push(parseFloat(b));
            }
            else {
                클리닝완료된거.push(b);
            }
        });
        return 클리닝완료된거;
    }
    console.log(클리닝함수([123, '3']));
    // 과목
    let 철수쌤 = { subject: 'math' };
    let 영희쌤 = { subject: ['science', 'english'] };
    let 민수쌤 = { subject: ['science', 'art', 'korean'] };
    function 만들함수(x) {
        if (typeof x.subject === 'string') {
            return x.subject;
        }
        else if (Array.isArray(x.subject)) {
            return x.subject[x.subject.length - 1];
        }
        else {
            return '없쪄';
        }
    }
    console.log(만들함수({ subject: 'math' }));
    console.log(만들함수({ subject: ['science', 'art', 'korean'] }));
    console.log(만들함수({ subject: ['english', 'art'] }));
    // console.log(만들함수({ hello: 'hi' }));  // type error
};
_narrowing();
const _assertion = () => {
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
    function 내함수(x) {
        let array = [];
        array[0] = x;
    }
    내함수(123);
    function 변환기(data) {
        return JSON.parse(data);
    }
    const jake = 변환기('{"name":"kim"}');
};
_assertion();
const _type_alias = () => {
    let 동물 = 123;
    let teacher = { name: `kim`, age: 20 };
    let 회원가입정보 = {
        name: 'kim',
        phone: 123,
    };
};
_type_alias();
const _readonly = () => {
    const 여친 = {
        name: `수정`
    };
    let 테스트용변수 = {
        size: 123,
        position: [1, 2, 3]
    };
};
_readonly();
const _type_alias_extend = () => {
    let position = { x: 10, y: 20 };
    let 회원가입정보 = {
        name: 'kim',
        adult: false,
        phone: 1234
    };
};
_type_alias_extend();
const _literal_type = () => {
    /** 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입 */
    // varable
    let 접니다;
    접니다 = `대머리`;
    // function
    function 함수(a) {
        return 1;
    }
    function 함수2(a) {
        return [`가위`, `보`];
    }
    console.log(함수2(`가위`));
    // 문제점
    var 자료 = {
        name: `kim`
    };
    function 내함수(a) {
    }
    내함수(자료.name);
    /** 해결법
        1. object 만들 때 타입 지정 확실히 하기
        2. as 문법으로 타입 구라치기
        3. as const 사용
          - object value 값을 그대로 타입으로 지정해 줌
          - object 속성들에 모두 readonly 붙여줌
     */
};
_literal_type();
const _function_type = () => {
    let 함수 = function (x, y) {
        return x + y;
    };
    // object
    let 회원정보 = {
        name: `kim`,
        age: 30,
        plusOne(x) {
            return x + 1;
        },
        changeName: () => {
            console.log(`안녕`);
        }
    };
    회원정보.plusOne(1);
    회원정보.changeName();
    let cutZero = function (x) {
        let result = x.replace(/^0+/, ""); // '0' 문자가 있으면 제거
        return result;
    };
    function removeDash(x) {
        let result = x.replace(/-/g, ""); // 대시기호 '-' 가 있으면 전부 제거
        return parseFloat(result);
    }
    function 만들함수(a, func1, func2) {
        let result = func1(a);
        let result2 = func2(result);
        console.log(result2);
    }
    만들함수(`010-1111-2222`, cutZero, removeDash); // 1011112222 출력잘됨
};
_function_type();
/** narrowing 5가지 방법 */
// 1. 일반
let 제목1 = document.querySelector(`#title`);
if (제목1 != null) {
    제목1.innerHTML = `반가워요`;
}
// 2. instanceof (추천)
let 제목2 = document.querySelector(`#title`);
if (제목2 instanceof Element) { // Object instanceof Class
    제목2.innerHTML = `반가워요`;
}
// 3. assertion
let 제목3 = document.querySelector(`#title`);
제목3.innerHTML = `반가워요`;
// 4. optional chaining
let 제목4 = document.querySelector(`#title`);
if ((제목4 === null || 제목4 === void 0 ? void 0 : 제목4.innerHTML) != undefined) {
    제목4.innerHTML = `반가워요`;
}
// 5. strict mode off in tsconfig.json
// Element 상속
let 링크 = document.querySelector(`.link`);
if (링크 instanceof HTMLAnchorElement) {
    링크.href = `https://kakao.com`;
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
let 버튼 = document.querySelector(`button`);
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener(`click`, function () {
    console.log(`안녕`);
});
// img
let 이미지 = document.querySelector(`img`);
if (이미지 instanceof HTMLImageElement) {
    이미지.src = `change.png`;
}
// 링크 한 번에 변경
let 링크2 = document.querySelectorAll('.naver');
링크2.forEach((a) => {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
});
const _class = () => {
    // 개념
    class Person {
        constructor(name, age = 20) {
            this.data = 0;
            this.name = name;
            this.age = age;
        }
        함수(name) {
            return `안녕, ${name}`;
        }
    }
    let kim = new Person(`kim`);
    let park = new Person(`park`);
    console.log(kim.data);
    console.log(kim.함수(`jiwan`));
    // car
    class Car {
        constructor(a, b) {
            this.model = a;
            this.price = b;
        }
        tax() {
            return this.price * 0.1;
        }
    }
    let car1 = new Car('소나타', 3000);
    console.log(car1); // Car { model: '소나타', price: 3000 }
    console.log(car1.tax()); // 300
    //  class Word
    class Word {
        constructor(...param) {
            let 숫자들 = [];
            let 문자들 = [];
            param.forEach((i) => {
                if (typeof i === 'string') {
                    문자들.push(i);
                }
                else {
                    숫자들.push(i);
                }
            });
            this.num = 숫자들;
            this.str = 문자들;
        }
    }
    let obj = new Word('kim', 3, 5, 'park');
    console.log(obj.num); // [ 3, 5 ]
    console.log(obj.str); // [ 'kim', 'park' ]
};
_class();
const _interface = () => {
    let 학생 = { name: `kim` };
    let 선생 = { name: `kim`, age: 20 };
    let 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
    let 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
    const basket = { product: '청소기', price: 7000, card: false };
    let 오브젝트 = {
        plus(a, b) {
            return a + b;
        },
        minus(a, b) {
            return a - b;
        }
    };
};
_interface();
const _rest_parameter = () => {
    /** 개념 */
    // rest parameter
    function 함수(...a) {
        return a;
    }
    함수(1, 5, 3, 5, 6, 6);
    // spread operator
    let arr = [3, 4, 5];
    let arr2 = [1, 2, ...arr];
    console.log(arr2);
    // Destructuring
    function 함수2({ student, age }) {
        console.log(student, age);
    }
    함수2({ student: true, age: 20 });
    /** 실습 */
    // 최대값
    function 최댓값(...x) {
        let result = 0;
        x.forEach((i) => {
            if (result < i) {
                result = i;
            }
        });
        return result;
    }
    console.log(최댓값(4, 6, 3, 2));
    function 함수3({ user, comment, admin }) {
        console.log(user, comment, admin);
    }
    함수3({ user: 'kim', comment: [3, 5, 4], admin: false });
    function 함수4([a, b, c]) {
        console.log(a, b, c);
    }
    함수4([40, 'wine', false]);
};
_rest_parameter();
const _narrowing2 = () => {
    // 1. && 연산자
    console.log(1 && null && 3); // null
    console.log(undefined && '안녕' && 100); // undefined
    function 함수(a) {
        if (a && typeof a === `string`) { }
    }
    function 함수2(animal) {
        if (`swim` in animal) {
            return 1;
        }
    }
    // 3. instanceof 연산자 (object instanceof 부모 class)
    let 날짜 = new Date();
    if (날짜 instanceof Date) {
        1;
    }
    function 함수3(x) {
        if (x.wheel === `4개`) {
            return 1;
        }
    }
};
_narrowing2();
const _never = () => {
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
    // error
    function 함수() {
        throw new Error(); // 코드 실행 중단
    }
    // 무한루프
    function 함수2() {
        while (true) {
            console.log(1);
        }
    }
    // 경로
    function 함수3(parameter) {
        if (typeof parameter === `string`) {
            parameter; // type: string
        }
        else {
            parameter; // type: never
        }
    }
    // 함수 표현식 (함수 선언문(function 함수4(){})는 void로 나옴)
    let 함수4 = function () {
        throw new Error();
    };
};
_never();
const _private = () => {
    /** 오리지널 자바스크립트 문법에서도 #이걸 속성옆에 붙이면 private 속성이 됩 */
    // 개념
    class User {
        constructor(name) {
            this.familyName = `kim`;
            this.name = name + this.familyName;
        }
        changeSecret() {
            this.familyName = `park`;
        }
    }
    let 유저1 = new User(`park`);
    // 유저1.familyName;  // 사용 못 함
    유저1.changeSecret(); // 사용 가능
    // 축약
    class Person {
        constructor(name) {
            this.name = name;
        }
        ;
    }
    let 자식 = new Person(`kim`);
    console.log(`자식`, 자식);
};
_private();
const _protected = () => {
    // 개념
    class User {
        constructor() {
            this.x = 10; // private 기능에서 extends된 class에서도 사용 가능
        }
    }
    class NewUser extends User {
        doThis() {
            this.x = 20; // 사용 가능
        }
    }
    let 사람 = new NewUser();
    console.log(사람); // NewUser { x: 10 }
};
_protected();
const _static = () => {
    // 개념 1
    class User {
        constructor() {
            this.y = 20;
        }
    }
    User.x = 10; // 부모 class에 직접 부여됨 // 자식에게 안 물려 줌
    let 자식 = new User();
    console.log(자식); // User { y: 20 }
    /**
     *  추가
     *  - 함수도 static 붙이기 가능
     *  - extends로 class를 복사할 경우 static 붙은 것들도 따라옴
     */
    // 개념 2
    class User2 {
        constructor() {
            this.intro = User2.skill + `전문가입니다.`;
        }
    }
    User2.skill = `js`;
    let 철수 = new User2();
    console.log(철수); // User2 { intro: 'js전문가입니다.' }
    User2.skill = `ts`;
    let 철수2 = new User2();
    console.log(철수2); // User2 { intro: 'ts전문가입니다.' }
    /** 실습 */
    // 설명
    class User3 {
        constructor() {
            this.z = 30;
        }
    }
    User3.x = 10;
    User3.y = 20;
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
    class User4 {
        static addOne(파라미터) {
            User4.x += 파라미터;
        }
        static printX() {
            console.log(User4.x);
        }
    }
    User4.x = 10;
    User4.y = 20;
    User4.addOne(3); //이렇게 하면 x가 3 더해져야함
    User4.addOne(4); //이렇게 하면 x가 4 더해져야함
    User4.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
    // 3
    class Square {
        constructor(width, height, color) {
            this.width = width;
            this.height = height;
            this.color = color;
        }
        draw() {
            let a = Math.random();
            let square = `
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
    let 네모 = new Square(30, 30, 'red');
    네모.draw();
    네모.draw();
    네모.draw();
    네모.draw();
};
_static();
// import { Age, Car, Name, ObjFunction } from "./types"; // 전역 사용으로 import 생략 가능
const _import = () => {
    // 개념
    const name2 = `park`;
    const age = a => a + 10;
    // 실습 1
    const car = { wheel: 4, model: `Sonata` };
    // 실습 2
    const 함수 = function (a) {
        console.log(a);
    };
    함수({ abc: '안뇽' });
};
_import();
const _generic = () => {
    /** 개념 */
    // generic
    function 함수(x) {
        return x[0];
    }
    let a = 함수([4, 2]);
    let b = 함수([`4`, `2`]); // Type 자동 설정
    // constraints
    function 함수2(x) {
        return x - 1;
    }
    let c = 함수2(100);
    function 함수3(x) {
        return x.length;
    }
    let d = 함수3(`100`);
    let e = 함수3([`100`]);
    // class
    class Hi {
    }
    /** 실습 */
    // 갯수 구하기
    function 함수4(x) {
        console.log(x.length);
    }
    함수4('hello');
    함수4(['kim', 'park']);
    let data = '{"name" : "dog", "age" : 1 }';
    function 함수5(data) {
        return JSON.parse(data);
    }
    console.log(함수5(data));
    // class
    class Person {
        constructor(a) {
            this.name = a;
        }
    }
    let f = new Person('어쩌구');
    f.name;
};
_generic();
const _tuple_type = () => {
    /** 개념 */
    // 변수
    let 멍멍 = [`dog`, true]; // ?는 뒤에서 부터 채움
    // 함수
    function 함수(...x) {
        return x;
    }
    console.log(함수(111, `222`));
    // 배열
    let arr = [1, 2, 3];
    let arr2 = [4, 5, ...arr];
    let arr3 = ['동서녹차', 4000, true, false, true, true, false, true];
    // 2
    function 함수2(...rest) {
    }
    함수2('a', true, 6, 3, '1', 4);
    // 3
    function 함수3(...rest) {
        let result = [[], []];
        rest.forEach((a) => {
            if (typeof a === 'string') {
                result[0].push(a);
            }
            else {
                result[1].push(a);
            }
        });
        return result;
    }
    console.log(함수3('b', 5, 6, 8, 'a'));
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
    class Car2 {
        constructor(a) {
            this.price = 1000;
            this.model = a;
        }
    }
    let 붕붕이 = new Car2('morning');
};
_implements();
const _object_index_signatures = () => {
    let user = {
        name: `kim`,
        age: 20,
        location: `seoul`
    };
    let css = {
        'font-size': {
            'font-size': {
                'font-size': 14
            }
        }
    };
    let obj = {
        model: 'k5',
        brand: 'kia',
        price: 6000,
        year: 2030,
        date: '6월',
        percent: '5%',
        dealer: '김차장',
    };
    let obj2 = {
        'font-size': 10,
        'secondary': {
            'font-size': 12,
            'third': {
                'font-size': 14
            }
        }
    };
};
_object_index_signatures();
const _keyof = () => {
    /** 개념 */
    // key 조회
    let obj = { name: `kim`, age: 20 };
    console.log(Object.keys(obj));
    let a = `name`;
    let a2 = `name`;
    let a3 = `name2`;
    let a4 = 1;
    let obj2 = {
        color: 'red',
        model: 'kia',
        price: '300',
    };
};
_keyof();
const _infer = () => {
    /** 개념 */
    let a; // string
    let a2; // unknown
    let age1; // string
    let age2; // any
    let age3; // string
    let age4; // unknown
};
_infer();
/** 전역 사용으로 export 생략 가능 */
var BadDog;
(function (BadDog) {
    ;
})(BadDog || (BadDog = {}));
const dog1 = 'bark';
const dog2 = { name: 'paw' };
