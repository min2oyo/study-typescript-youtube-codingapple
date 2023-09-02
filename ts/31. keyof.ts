const _keyof = () => {

  /** 개념 */
  // key 조회
  let obj = { name: `kim`, age: 20 };
  console.log(Object.keys(obj));

  // 2
  interface Person {
    age: number;
    name: string;
  }
  type PersonKeys = keyof Person; // `age` | `name`
  let a: PersonKeys = `name`;

  // 3
  interface Person2 {
    [key: string]: number;
  }
  type PersonKeys2 = keyof Person2; // string | number  // number도 가능함
  let a2: PersonKeys2 = `name`;
  let a3: PersonKeys2 = `name2`;
  let a4: PersonKeys2 = 1;

  // Mapped Types
  type Car2 = {
    color: boolean;
    model: boolean;
    price: boolean | number;
  };

  type TypeChanger<MyType> = {
    [key in keyof MyType]: string
  };
  type 새로운타입 = TypeChanger<Car2>;

  let obj2: 새로운타입 = {
    color: 'red',
    model: 'kia',
    price: '300',
  };

  /** 실습 */
  // 1
  type Bus = {
    color: string,
    model: boolean,
    price: number;
  };

  type TypeChanger2<MyType> = {
    [key in keyof MyType]: string | number;
  };

  type NewBus = TypeChanger2<Bus>;

  // 2
  type TypeChanger3<MyType, T> = {
    [key in keyof MyType]: T;
  };

  type NewBus2 = TypeChanger3<Bus, boolean>;
  type NewBus3 = TypeChanger3<Bus, string[]>;

};

_keyof();