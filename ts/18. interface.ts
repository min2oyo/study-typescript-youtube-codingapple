/** 중복선언
    - interface: 가능
    - type: 불가능
 */

const _interface = () => {

  /** 개념 */

  // interface
  interface Student {
    name: string;
  }

  interface Teacher extends Student { // 'Student & Teacher'도 가능
    age: number;
  }

  const student: Student = { name: `kim` };
  const teacher: Teacher = { name: `kim`, age: 20 };

  // type
  type Animal = { name: string; };
  type Cat = { age: number; } & Animal; // intersection type
  type Dog = { name: number; } | Animal;

  const cat: Cat = { name: `kim`, age: 2 };
  const dog: Dog = { name: `kim` };


  /** 실습 */

  // 가전
  interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
  }

  const product: Product = {
    brand: 'Samsung',
    serialNumber: 1360,
    model: ['TV', 'phone']
  };

  // 쇼핑몰 바구니
  interface Cart {
    product: string;
    price: number;
  }

  const cart: Cart[] = [
    {
      product: '청소기',
      price: 7000
    },
    {
      product: '삼다수',
      price: 800
    }
  ];

  // 확장
  interface NewCart extends Cart {
    card: boolean;
  }

  const basket: NewCart = {
    product: '청소기',
    price: 7000,
    card: false
  };

  // 연산
  interface MathObj {
    plus: (x: number, y: number) => number;
    minus: (x: number, y: number) => number;
  }

  const obj: MathObj = {
    plus(x, y) { return x + y; },
    minus(x, y) { return x - y; }
  };

  /** light */
  student; teacher; cat; dog; product; cart; basket; obj;

};

_interface();