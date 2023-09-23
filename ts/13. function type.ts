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

  console.log(user.plusOne(1)); // 2
  user.changeName();            // 안녕

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
  type CutType1 = (x: string) => string;
  type CutType2 = (x: string) => number;

  const cutZero: CutType1 = x => {
    return x.replace(/^0+/, "");  // '0' 문자가 있으면 제거
  };

  const removeDash: CutType2 = x => {
    return parseFloat(x.replace(/-/g, "")); // 대시기호 '-' 가 있으면 전부 제거
  };

  const makeFunc = (x: string, cutZero: CutType1, removeDash: CutType2) => {
    return removeDash(cutZero(x));
  };

  console.log(makeFunc(`010-1111-2222`, cutZero, removeDash));  // 1011112222


  /** light */
  member;

};

_function_type();