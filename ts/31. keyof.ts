const _keyof = () => {

  /** 개념 */
  // key 조회
  const obj = { name: `kim`, age: 20 };

  console.log(Object.keys(obj));  // [ 'name', 'age' ]

  // 2
  interface Person {
    age: number;
    name: string;
  }

  type PersonKeys = keyof Person; // `age` | `name`

  const a: PersonKeys = `name`;

  // 3
  interface Person2 {
    [key: string]: number;
  }

  type PersonKeys2 = keyof Person2; // string | number  // number도 가능함

  const a2: PersonKeys2 = `name`;
  const a3: PersonKeys2 = `name2`;
  const a4: PersonKeys2 = 1;

  // Mapped Types
  type Car = {
    color: boolean;
    model: boolean;
    price: boolean | number;
  };

  type TypeChanger<T> = {
    [key in keyof T]: string;
  };

  type NewType = TypeChanger<Car>;

  const obj2: NewType = {
    color: 'red',
    model: 'kia',
    price: '300',
  };



  /** 실습 */
  // 1
  type Bus = {
    color: string;
    model: boolean;
    price: number;
  };

  type TypeChanger2<T> = {
    [key in keyof T]: string | number;
  };

  type NewBus = TypeChanger2<Bus>;

  // 2
  type TypeChanger3<T1, T2> = {
    [key in keyof T1]: T2;
  };

  type NewBus2 = TypeChanger3<Bus, boolean>;
  type NewBus3 = TypeChanger3<Bus, string[]>;



  /** light */
  a; a2; a3; a4; obj2;

};

_keyof();