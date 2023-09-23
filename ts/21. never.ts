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
  function func1(): never {
    throw new Error();  // 코드 실행 중단
  }

  // 2. 무한루프
  function func2(): never {
    while (true) {
      console.log(1);
    }
  }

  // 3. 경로
  function func3(parameter: string) {
    if (typeof parameter === `string`) {
      parameter;  // type: string
    } else {
      parameter;  // type: never
    }
  }

  // 4. func 표현식 (func 선언문(function func4(){})는 void로 나옴)
  const func4 = function () { // type: never
    throw new Error();
  };



  /** light */
  func1; func2; func3; func4;

};

_never();