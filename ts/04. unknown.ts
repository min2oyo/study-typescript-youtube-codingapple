const _unknown = () => {
  let 이름: unknown;
  이름 = {};
  이름 = 123;

  // let 변수1: string = 이름;  // error 남
  // let 변수2: boolean = 이름; // error 남
  // let 변수3: number = 이름;  // error 남

  // 이름[0];    // 왜 error 나지?
  // 이름 - 1;   // error 남
  // 이름.data;  // error 남

  let 나이: unknown = 1;
  // 나이 - 1;  // error 남 // 숫자 타입이여야 숫자처럼 연산해 줌

};

_unknown();