const _undefined = () => {

  /** ?는 number | undefined와 같음 */
  // function
  function 함수(x?: number): void { };
  함수();

  // object
  type Square = {
    color?: string,
    width: number,
  };

  let 네모: Square = {
    width: 100
  };

};

_undefined();