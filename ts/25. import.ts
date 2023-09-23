// import { Age, Car, Name, ObjFunction } from "./types"; // 전역 사용으로 import 생략 가능

const _import = () => {

  /** 개념 */

  const name2: Name = `park`;
  const age: Age = a => a + 10;

  // 실습 1
  const car: Car = { wheel: 4, model: `Sonata` };

  // 실습 2
  const 함수: ObjFunction = function (a) {
    console.log(a);
  };
  함수({ abc: '안뇽' });

};

_import();