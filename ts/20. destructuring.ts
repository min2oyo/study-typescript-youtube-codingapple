const _destructuring = () => {

  /** 개념 */
  // Destructuring
  const func = ({ student, age }: { student: boolean; age: number; }) => {
    console.log(student, age);  // true 20
  };
  func({ student: true, age: 20 });



  /** 실습 */
  // object(user)
  type UserType = {
    user: string;
    comment: number[];
    admin: boolean;
  };

  const func1 = ({ user, comment, admin }: UserType) => {
    console.log(user, comment, admin);  // kim [ 3, 5, 4 ] false
  };

  func1({ user: 'kim', comment: [3, 5, 4], admin: false });

  // array
  type Array = (number | string | boolean)[];

  const func2 = ([a, b, c]: Array) => {
    console.log(a, b, c); // 40 wine false
  };

  func2([40, 'wine', false]);

};

_destructuring();