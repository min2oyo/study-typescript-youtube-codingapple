const _generic = () => {

  /** 개념 */
  // generic
  const func1 = <T>(x: T[]) => {  // 2개 이상 넣을 수도 있음
    return x[0];
  };

  const a = func1<number>([4, 2]);
  const b = func1([`4`, `2`]); // Type 자동 설정

  console.log(a); // 4
  console.log(b); // 4

  // constraints
  const func2 = <T extends number>(x: T) => {
    return x - 1;
  };

  const c = func2<number>(100);

  console.log(c); // 99

  // custom type
  interface LengthCheck {
    length: number;
  }

  const func3 = <T extends LengthCheck>(x: T) => {
    return x.length;
  };

  const d = func3<string>(`100`);
  const e = func3<string[]>([`100`]);

  console.log(d); // 3
  console.log(e); // 1

  // class
  class Hi<T> { }

  // type
  type Age<T> = T;

  /** 실습 */
  // 갯수 구하기
  const func4 = <T extends string | string[]>(x: T) => {
    console.log(x.length);
  };

  func4<string>('hello'); // 5
  func4<string[]>(['kim', 'park']); // 2

  // 동물
  interface Animal {
    name: string;
    age: number;
  }

  const data = `{"name" : "dog", "age" : 1 }`;

  const func5 = <T>(data: string): T => {
    return JSON.parse(data);
  };

  console.log(func5<Animal>(data)); // { name: 'dog', age: 1 }

  // class
  class Person<T> {
    name;
    constructor(a: T) {
      this.name = a;
    }
  }

  const person = new Person<string>('어쩌구');

  console.log(person.name); // 어쩌구

};

_generic();