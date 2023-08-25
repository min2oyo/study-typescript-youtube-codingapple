interface CarType {
  model: string,
  price: number;
  // color: string,
  // tax: (price: number) => number;
}

class Car2 implements CarType { // interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
  // color;  // any type
  // tax(a) {   ///a 파라미터는 any 타입됨 
  //   return a * 0.1;
  // }
}
let 붕붕이 = new Car2('morning');