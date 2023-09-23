const _undefined = () => {

  /** 개념 */

  // function
  function numVoid(x?: number): void {  // ?는 number | undefined와 같음
    x;
  };


  /** 실습 */

  // object
  type Square = {
    color?: string,
    width: number,
  };

  const square: Square = {
    width: 100
  };


  /** light */
  numVoid(); square;

};

_undefined();