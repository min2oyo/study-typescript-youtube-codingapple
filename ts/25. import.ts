/** Run Code 실행이 안 됨 */
// import { Age, Car, Name, ObjFunction } from "./types"; // 전역 사용으로 import 생략 가능

const _import = () => {

  /** 개념 */
  const name: Name = `park`;
  const age: Age = a => a + 10;

  /** 실습 */
  // 1
  const car: Car = {
    wheel: 4,
    model: `Sonata`,
  };

  // 2
  const func: ObjFunction = a => {
    console.log(a);
  };

  func({ abc: `hi` });

  /** light */
  name; age; car;

};

_import();