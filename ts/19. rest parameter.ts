const _rest_parameter = () => {

  /** 개념 */
  // rest parameter
  const func = (...a: number[]) => { // 다른 파라미터 있으면 맨 뒤에만 사용 가능
    return a;
  };
  console.log(func(1, 5, 3, 5, 6, 6));  // [ 1, 5, 3, 5, 6, 6 ]

  // spread operator
  const arr1 = [3, 4, 5];
  const arr2 = [1, 2, ...arr1];
  console.log(arr2);  // [ 1, 2, 3, 4, 5 ]

  /** 실습 */
  // 최대값
  const maxNum = (...a: number[]) => {
    let result = 0;
    a.forEach(i => {
      if (result < i) {
        result = i;
      }
    });
    return result;
  };
  console.log(maxNum(4, 6, 3, 2));  // 6

};

_rest_parameter();