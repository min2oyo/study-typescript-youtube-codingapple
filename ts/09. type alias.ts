const _type_alias = () => {

  /** 개념 */

  type Animal = string | number | undefined;
  const animal: Animal = 123;


  /** 실습 */

  type Person = { name: string, age: number; };
  const teacher: Person = { name: `kim`, age: 20 };

  type User = { name: string, email?: string, phone: number; };
  const 회원가입정보: User = {
    name: 'kim',
    phone: 123,
  };


  /** light */
  animal; teacher;

};

_type_alias();