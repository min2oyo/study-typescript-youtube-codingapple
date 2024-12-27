const _static = () => {

  /** 개념 */
  // user
  class Parent {
    private static x = 10;  // 부모 class에 직접 부여됨 // 자식에게 안 물려 줌
    y = 20;
  }

  const child = new Parent();

  console.log(child);  // Parent { y: 20 }

  /**
   *  추가
   *  - 함수도 static 붙이기 가능
   *  - extends로 class를 복사할 경우 static 붙은 것들도 따라옴
   */

  // Ability
  class Ability {
    static skill = `js`;
    intro = Ability.skill + `전문가입니다.`;
  }

  const cheolsu = new Ability();

  console.log(cheolsu);  // Ability { intro: 'js전문가입니다.' }

  Ability.skill = `ts`;

  const younghee = new Ability();

  console.log(younghee); // Ability { intro: 'ts전문가입니다.' }

  /** 실습 */
  // 1
  class Number {
    private static x = 10;
    public static y = 20;
    protected z = 30;
  }

  // console.log(Number.x); // errer

  console.log(Number.y);  // 20

  // console.log(Number.z); // errer

  /**
   *   x,y 속성의 특징
   *   1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만
   *      x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만
   *      접근해서 쓸 수 있습니다. User의 자식들은 x와 y를 쓸 수 없습니다.
   *   2. private static x는 class 내부에서만 수정가능합니다.
   *   3. public static y는 class 내부 외부 상관없이 수정가능합니다.
   *      public 키워드 지워도 똑같이 동작할 듯
   *   4. protected z는 private 키워드와 유사하게 class 내부에서만
   *      사용이 가능한데 약간 범위가 넓어서 extends로 복사한 class 내부에서도
   *      사용할 수 있습니다.
   */

  // 2
  class Operator {

    private static x = 10;
    public static y = 20;

    static addOne(a: number) {
      return Operator.x += a;
    }

    static printX() {
      console.log(Operator.x);
    }

  }

  console.log(Operator.addOne(3));  // 13  // 이렇게 하면 x가 3 더해져야 함

  console.log(Operator.addOne(4));  // 17  // 이렇게 하면 x가 4 더해져야 함

  Operator.printX();                // 17  // 이렇게 하면 콘솔창에 x값이 출력되어야 함

  // 3
  class Square {

    constructor(
      public width: number,
      public height: number,
      public color: string
    ) { }

    draw() {
      const a = Math.random();
      const square = `
        <div style="
          position: relative;
          top: ${a * 400}px;
          left: ${a * 400}px;
          width: ${this.width}px;
          height: ${this.height}px;
          background:${this.color}">
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', square);
    }

  }

  const square = new Square(30, 30, 'red');

  square.draw();
  square.draw();
  square.draw();
  square.draw();

};

_static();