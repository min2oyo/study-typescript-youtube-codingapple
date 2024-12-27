const _destructuring = () => {

  /** 개념 */
  // Destructuring
  interface Student {
    student: boolean;
    age: number;
  }

  const func = ({ student, age }: Student) => {
    console.log(student, age);  // true 20
  };

  func({ student: true, age: 20 });

  /** 실습 */
  // object(user)
  interface UserType {
    user: string;
    comment: number[];
    admin: boolean;
  };

  const func1 = ({ user, comment, admin }: UserType) => {
    console.log(user, comment, admin);
  };

  func1({ user: 'kim', comment: [3, 5, 4], admin: false }); // kim [ 3, 5, 4 ] false

  // array
  type Array = (number | string | boolean)[];

  const func2 = ([a, b, c]: Array) => {
    console.log(a, b, c);
  };

  func2([40, 'wine', false]); // 40 wine false

};

_destructuring();