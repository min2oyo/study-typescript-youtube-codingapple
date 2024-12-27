const _unknown = () => {

  /** 개념 */

  let name: unknown;
  name = {};
  name = 123;

  // const str: string = name;  // error
  // const bln: boolean = name; // error
  // const num: number = name;  // error

  // name[0];    // 왜 error 나지?
  // name - 1;   // error
  // name.data;  // error

  const age: unknown = 1;
  // age - 1;  // error // 숫자 타입이여야 숫자처럼 연산해 줌

  /** light */
  age;

};

_unknown();