const _class = () => {

  /** 개념 */

  class Person {

    data = 0;
    name;
    age;

    constructor(name: string, age = 20) { // age = 20: default parameter
      this.name = name;
      this.age = age;
    }

    func(name: string) {
      return `안녕, ${name}`;
    }

  }

  const kim = new Person(`kim`);
  const park = new Person(`park`);

  console.log(kim.data);          // 0
  console.log(kim.func(`jiwan`)); // 안녕, jiwan
  console.log(park);              // Person { data: 0, name: 'park', age: 20 }


  /** 실습 */

  // car
  class Car {

    model;
    price;

    constructor(x: string, y: number) {
      this.model = x;
      this.price = y;
    }

    tax() {
      return this.price * 0.1;
    }

  }

  const car = new Car('소나타', 3000);

  console.log(car);       // Car { model: '소나타', price: 3000 }
  console.log(car.tax()); // 300

  //  class Word
  class Word {

    num;
    str;

    constructor(...param: (number | string)[]) {

      const numbers: number[] = [];
      const strings: string[] = [];

      param.forEach(i => {
        if (typeof i === 'string') {
          strings.push(i);
        } else {
          numbers.push(i);
        }
      });

      this.num = numbers;
      this.str = strings;

    }

  }

  const word = new Word('kim', 3, 5, 'park');

  console.log(word.num); // [ 3, 5 ]
  console.log(word.str); // [ 'kim', 'park' ]

};

_class();