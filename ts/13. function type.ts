const _function_type = () => {

  /** 개념 */

  // function
  type NumOut = (x: number, y: number) => number;

  const func: NumOut = function (x, y) {
    return x + y;
  };

  console.log(func(1, 2));  // 3


  /** 실습 */

  // object
  const user = {
    name: `kim`,
    age: 30,
    plusOne(x: number) {
      return x + 1;
    },
    changeName: () => {
      console.log(`안녕`);
    }
  };

  console.log(user.plusOne(1));   // 2
  console.log(user.changeName()); // 안녕

  // 회원정보
  type Member = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
  };

  const member: Member = {
    name: `ria`,
    age: 21,
    plusOne: (x) => x,
    changeName: () => { }
  };

  // 함수2개 만들고 타입 정의
  type CutType = (x: string) => string;

  const cutZero: CutType = function (x) {
    const result = x.replace(/^0+/, "");  // '0' 문자가 있으면 제거
    return result;
  };

  function removeDash(x: string): number {
    const result = x.replace(/-/g, ""); // 대시기호 '-' 가 있으면 전부 제거
    return parseFloat(result);
  };

  // 콜백함수
  type FuncType1 = (a: string) => string;
  type FuncType2 = (a: string) => number;

  function makeFunc(a: string, func1: FuncType1, func2: FuncType2) {
    const result = func1(a);
    const result2 = func2(result);
    console.log(result2);
  }

  makeFunc(`010-1111-2222`, cutZero, removeDash);  // 1011112222 출력잘됨


  /** light */
  member;

};

_function_type();