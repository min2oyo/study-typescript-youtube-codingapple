const _readonly = () => {

  // 1
  type Girlfriend = {
    readonly name: string;
  };

  const 여친: Girlfriend = {
    name: `수정`
  };

  // 여친.name = `유라`; // error

  // 2
  type MyType = {
    color?: string,
    size: number,
    readonly position: number[];
  };

  const 테스트용변수: MyType = {
    size: 123,
    position: [1, 2, 3]
  };

};

_readonly();