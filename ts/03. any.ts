const _any = () => {

  /** 개념 */

  let age: any;
  age = 123;
  age = [];
  console.log(typeof age);    // object

  const newAge: string = age; // error 안 남
  console.log(typeof newAge); // object
  console.log(newAge);        // []

};

_any();