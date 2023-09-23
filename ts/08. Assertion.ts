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

  function myFucn(param: number | string) {
    const array: number[] = [];
    array[0] = param as number;
    console.log(array);
  }

  myFucn(123);  // [ 123 ]


  /** 실습 */

  // 타입을 강제로 부여하는 기계 (Assertttion의 유용한 쓰임)
  type Person = {
    name: string;
  };

  function change<T>(data: string): T {
    return JSON.parse(data) as T;
  }

  const jake = change<Person>(`{"name":"kim"}`);
  console.log(jake);  // { name: 'kim' }

};

_assertion();