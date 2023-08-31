const type_alias = () => {

  type Animal = string | number | undefined;
  let 동물: Animal = 123;

  type 사람 = { name: string, age: number; };
  let teacher: 사람 = { name: `kim`, age: 20 };

  type User = { name: string, email?: string, phone: number; };
  let 회원가입정보: User = {
    name: 'kim',
    phone: 123,
  };

};