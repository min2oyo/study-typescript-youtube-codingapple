const _type_alias = () => {

  /** 개념 */

  type Animal = string | number | undefined;

  const animal: Animal = 123;


  /** 실습 */

  // 사람
  type Person = { name: string, age: number; };

  const teacher: Person = { name: `kim`, age: 20 };

  // 회원정보
  type User = { name: string, email?: string, phone: number; };

  const user: User = {
    name: 'kim',
    phone: 123,
  };


  /** light */
  animal; teacher; user;

};

_type_alias();