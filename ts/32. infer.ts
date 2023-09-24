const _infer = () => {

  /** 개념 */
  // extends 1
  type Age<T> = T extends string ? string : unknown;  // T : unknown 와 같음

  let a: Age<string>; // string
  let a2: Age<number>;  // unknown

  // extends 2
  type FirstItem<T> = T extends any[] ? T[0] : any;

  let age1: FirstItem<string[]>;  // string
  let age2: FirstItem<number>;    // any

  // infer 1 - 변수
  type Person<T> = T extends infer R ? R : unknown; // 타입파라미터에서 타입을 추출 // 왼쪽에서 타입 뽑아서 R 변수에 담아주셈~
  type a = Person<string>;

  // infer 2 - 배열
  type Person2<T> = T extends (infer R)[] ? R : unknown; // array 안에 있던 타입이 어떤 타입인지 뽑아서 변수로 만듦  // (infer R)[] 이렇게 하면 array가 가지고 있던 타입부분만 쏙 뽑아서 R 변수에 할당
  type b = Person2<string[]>;  // string

  // infer 3 - 함수
  type Person3<T> = T extends (() => infer R) ? R : unknown;
  type a3 = Person3<() => void>;



  /** 실습 */
  // 타입 파라미터로
  type Age2<T> = T extends [string, ...any] ? T[0] : unknown;
  let age3: Age2<[string, number]>;   // string
  let age4: Age2<[boolean, number]>;  // unknown

  // 함수의 파라미터의 타입을 뽑아주는 기계
  type GetType<T> = T extends (x: infer R) => any ? R : any;
  type a2 = GetType<(x: number) => void>;  // number
  type a4 = GetType<(x: string) => void>;  // string



  /** light */
  a = ``; a2; age1 = ``; age2; age3 = ``; age4;

};

_infer();