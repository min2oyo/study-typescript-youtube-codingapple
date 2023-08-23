// 개념
export type Name = string;
export type Age = (a: number) => number;
export interface 인터페이스 { }

// 실습 1
export type Car = {
  wheel: number,
  model: string;
};
export interface Bike {
  wheel: 2,
  model: string;
}

// 실습 2
export type ObjFunction = (a?: object) => void;

// 실습 3
namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog { name: string; };
}

const dog1: GoodDog.Dog = 'bark';
const dog2: BadDog.Dog = { name: 'paw' };