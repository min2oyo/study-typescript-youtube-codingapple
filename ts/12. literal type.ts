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
  let me: `대머리` | `솔로`;
  me = `대머리`;

  // function
  function func1(param: `hello`): 1 | 0 {
    param;
    return 1;
  }
  console.log(func1(`hello`));

  function fucn2(param: `가위` | `바위` | `보`): (`가위` | `바위` | `보`)[] {
    param;
    return [`가위`, `보`];
  }
  console.log(fucn2(`가위`)); // [ '가위', '보' ]

  // 문제점
  const data = {
    name: `kim`
  } as const; // 정확히 명시?

  function myFunc(param: `kim`) {
    param;
  }

  myFunc(data.name);  // as const 안 하면 error

};

_literal_type();