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
  function 함수(): never {
    throw new Error();  // 코드 실행 중단
  }

  // 무한루프
  function 함수2(): never {
    while (true) {
      console.log(1);
    }
  }

  // 경로
  function 함수3(parameter: string) {
    if (typeof parameter === `string`) {
      parameter;  // type: string
    } else {
      parameter;  // type: never
    }
  }

  // 함수 표현식 (함수 선언문(function 함수4(){})는 void로 나옴)
  const 함수4 = function () { // type: never
    throw new Error();
  };

};

_never();