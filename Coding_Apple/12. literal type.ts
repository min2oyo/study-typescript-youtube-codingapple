/** 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입 */
// varable
let 접니다: `대머리` | `솔로`;
접니다 = `대머리`;

// function
function 함수(a: `hello`): 1 | 0 {
  return 1;
}

function 함수2(a: `가위` | `바위` | `보`): (`가위` | `바위` | `보`)[] {
  return [`가위`, `보`];
}
console.log(함수2(`가위`));

// 문제점
var 자료 = {
  name: `kim`
} as const;

function 내함수(a: `kim`) {

}

내함수(자료.name);
/** 해결법
    1. object 만들 때 타입 지정 확실히 하기
    2. as 문법으로 타입 구라치기
    3. as const 사용
      - object value 값을 그대로 타입으로 지정해 줌
      - object 속성들에 모두 readonly 붙여줌
 */