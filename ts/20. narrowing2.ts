const _narrowing2 = () => {

  // 1. && 연산자
  console.log(1 && null && 3);  // null
  console.log(undefined && '안녕' && 100);  // undefined
  function 함수(a: string | undefined) {
    if (a && typeof a === `string`) { }
  }

  // 2. in 키워드
  type Fish = { swim: string; };
  type Bird = { fly: string; };

  function 함수2(animal: Fish | Bird) {
    if (`swim` in animal) {
      return 1;
    }
  }

  // 3. instanceof 연산자 (object instanceof 부모 class)
  const 날짜 = new Date();
  if (날짜 instanceof Date) {
    1;
  }

  // 4. literal type
  type Car = {
    wheel: `4개`;
    color: string;
  };
  type Bike = {
    wheel: `2개`;
    color: string;
  };
  function 함수3(x: Car | Bike) {
    if (x.wheel === `4개`) {
      return 1;
    }
  }

};

_narrowing2();