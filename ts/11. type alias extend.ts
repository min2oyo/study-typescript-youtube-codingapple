const _type_alias_extend = () => {

  /** 개념 */

  // Varable
  type Name = string;
  type Age = number;
  type Person = Name | Age;

  // Object
  type PositionX = { x: number; };
  type PositionY = { y: number; };

  type NewType = PositionX & PositionY;

  const position: NewType = { x: 10, y: 20 };

  /** 실습 */

  // User
  type User = {
    name: string;
    email?: string;
    phone: number;
  };

  type Adult = {
    adult: boolean;
  };

  type NewUser = User & Adult;

  const member: NewUser = {
    name: 'kim',
    adult: false,
    phone: 1234
  };

  /** light */
  const person: Person = ``; person; position; member;

};

_type_alias_extend();