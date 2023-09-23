const _narrowing = () => {

  /** 개념 */
  // Narrowing 판정 문법: typeof 변수 | 속성명 in 오브젝트자료 | 인스턴스 instanceof 부모
  function myFunc(x: number | string) {
    if (typeof x === `number`) return x + 1;
    else if (typeof x === `string`) return x + `1`;
    else 0;
  }
  console.log(myFunc(123));   // 124
  console.log(myFunc(`123`)); // 1231

  // 1. && 연산자
  console.log(1 && null && 3);  // null
  console.log(undefined && '안녕' && 100);  // undefined

  const func1 = (a: string | undefined) => {
    if (a && typeof a === `string`) {
      return 1;
    }
  };

  console.log(func1(`hi`)); // 1

  // 2. in 키워드
  type Fish = { swim: string; };
  type Bird = { fly: string; };

  const func2 = (animal: Fish | Bird) => {
    if (`swim` in animal) {
      return 1;
    }
  };

  console.log(func2({ swim: `hi` })); // 1

  // 3. instanceof 연산자 (object instanceof 부모 class)
  const date = new Date();

  const func3 = () => {
    if (date instanceof Date) {
      return 1;
    }
  };

  console.log(func3()); // 1

  // 4. literal type
  type Car = {
    wheel: `4개`;
    color: string;
  };

  type Bike = {
    wheel: `2개`;
    color: string;
  };

  const func4 = (a: Car | Bike) => {
    if (a.wheel === `4개`) {
      return 1;
    }
  };

  console.log(func4({ wheel: `4개`, color: `hi` }));  // 1



  /** 실습 */
  // 숫자 변환
  function cleanFunc(param: (number | string)[]) {

    const cleaned: number[] = [];

    param.forEach((item) => {
      const condition = typeof item === 'string';
      cleaned.push(condition ? parseFloat(item) : item);
    });

    return cleaned;
  }
  console.log(cleanFunc([123, '3'])); // [ 123, 3 ]

  // 최종 과목
  const cheolsu = { subject: 'math' };
  const younghee = { subject: ['science', 'english'] };
  const minsu = { subject: ['science', 'art', 'korean'] };

  function makeFunc(param: { subject: string | string[]; }) {
    if (typeof param.subject === 'string') {
      return param.subject;
    } else if (Array.isArray(param.subject)) {
      return param.subject[param.subject.length - 1];
    } else {
      return '없쪄';
    }
  }
  console.log(makeFunc(cheolsu));   // math
  console.log(makeFunc(younghee));  // art
  console.log(makeFunc(minsu));     // korean
  // console.log(makeFunc({ hello: 'hi' }));  // type error


  /** light */
  cheolsu; younghee; minsu;

};

_narrowing();