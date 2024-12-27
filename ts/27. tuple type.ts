const _tuple_type = () => {

  /** 개념 */
  // 변수
  const bark: [string, boolean?, number?] = [`dog`, true];  // ?는 뒤에서부터 입력함

  // 함수
  const func = (...x: [number, string]) => {
    return x;
  };

  console.log(func(111, `222`));  // [ 111, `222` ]

  // 배열
  const arr1 = [1, 2, 3];
  const arr2: [number, number, ...number[]] = [4, 5, ...arr1];
  console.log(arr2);  // [ 4, 5, 1, 2, 3 ]

  /** 실습 */
  // 1
  type Arr = [string, number, ...boolean[]];
  const arr3: Arr = [`동서녹차`, 4000, true, false, true, true, false, true];

  // 2
  const func2 = (...rest: [string, boolean, ...(number | string)[]]) => {
    return rest;
  };

  console.log(func2(`a`, true, 6, 3, `1`, 4));  // [ 'a', true, 6, 3, '1', 4 ]

  // 3
  const func3 = (...rest: (string | number)[]) => {

    const result: [string[], number[]] = [[], []];

    rest.forEach((a) => {
      if (typeof a === `string`) {
        result[0].push(a);
      } else {
        result[1].push(a);
      }
    });

    return result;
  };

  console.log(func3(`b`, 5, 6, 8, `a`));  // [ [ 'b', 'a' ], [ 5, 6, 8 ] ]



  /** light */
  bark; arr3;

};

_tuple_type();