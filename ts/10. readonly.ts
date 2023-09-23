const _readonly = () => {

  /** 개념 */

  type Girlfriend = {
    readonly name: string;
  };

  const girlfriend: Girlfriend = {
    name: `수정`
  };
  // girlfriend.name = `유라`; // error


  /** 실습 */

  type MyType = {
    color?: string;
    size: number;
    readonly position: number[];
  };

  const test: MyType = {
    size: 123,
    position: [1, 2, 3]
  };


  /** light */
  girlfriend; test;

};

_readonly();