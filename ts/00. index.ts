const _index = () => {

  /** Primitive Types */

  // Varable
  const varable: string = `kim`; // string, number, boolean, bigint, null, undefined,[], {} 등

  // Array
  const array: string[] = [`kim`, `park`];

  // Object
  const object: { name?: string; age: number; } = { age: 19 };  // ?는 옵션

  // Union
  const union: string | number = `kim`;

  // Type
  type Name = string | number;  // type 변수명은 주로 대문자 사용
  const word: Name = 123;

  // literal type
  type NameType = `kim` | `park`;
  const who: NameType = `kim`;

  // Function
  function num(x: number): number {
    return x * 2;
  }

  function num2(x: number | string) {
    if (typeof x === 'number') {  // 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용
      return x * 2;
    }
  }

  // Tuple Type
  type Member = [number, boolean];
  const john: Member = [123, true];

  // Index Signature
  type Member2 = { [key: string]: string; };
  const john2: Member2 = { name: `kim`, age: `123` };

  // Class
  class User {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  };

  /** light */
  varable; array; object; union; word; who; num; num2; john; john2; User;

};

_index();