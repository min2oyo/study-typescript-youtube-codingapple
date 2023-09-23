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