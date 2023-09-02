const _generic = () => {

  /** 개념 */
  // generic
  function 함수<T>(x: T[]) {  // 2개 이상 넣을 수도 있음
    return x[0];
  }

  let a = 함수<number>([4, 2]);
  let b = 함수([`4`, `2`]); // Type 자동 설정



  // constraints
  function 함수2<T extends number>(x: T) {
    return x - 1;
  }

  let c = 함수2<number>(100);



  // custom type
  interface LengthCheck {
    length: number;
  }

  function 함수3<T extends LengthCheck>(x: T) {
    return x.length;
  }
  let d = 함수3<string>(`100`);
  let e = 함수3<string[]>([`100`]);



  // class
  class Hi<T> { }
  // type
  type Age<T> = T;



  /** 실습 */
  // 갯수 구하기
  function 함수4<T extends string | string[]>(x: T) {
    console.log(x.length);
  }

  함수4<string>('hello');
  함수4<string[]>(['kim', 'park']);



  // 동물
  interface Animal {
    name: string;
    age: number;
  }

  let data = '{"name" : "dog", "age" : 1 }';

  function 함수5<T>(data: string): T {
    return JSON.parse(data);
  }

  console.log(함수5<Animal>(data));



  // class
  class Person<T> {
    name;
    constructor(a: T) {
      this.name = a;
    }
  }
  let f = new Person<string>('어쩌구');
  f.name;

};

_generic();