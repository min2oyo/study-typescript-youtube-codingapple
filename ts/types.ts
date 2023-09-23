/** 전역 사용으로 export 생략 가능 */

/** 개념 */
type Name = string;
type Age = (a: number) => number;
interface 인터페이스 { }

/** 실습 */
// 1
type Car = {
  wheel: number;
  model: string;
};

interface Bike {
  wheel: 2,
  model: string;
}

// 2
type ObjFunction = (a?: object) => void;

// namespace
namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog { name: string; };
}

const dog1: GoodDog.Dog = 'bark';
const dog2: BadDog.Dog = { name: 'paw' };