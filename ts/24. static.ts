const _static = () => {

  // 개념 1
  class User {
    private static x = 10;  // 부모 class에 직접 부여됨 // 자식에게 안 물려 줌
    y = 20;
  }

  const 자식 = new User();
  console.log(자식);  // User { y: 20 }
  /**
   *  추가
   *  - 함수도 static 붙이기 가능
   *  - extends로 class를 복사할 경우 static 붙은 것들도 따라옴
   */



  // 개념 2
  class User2 {
    static skill = `js`;
    intro = User2.skill + `전문가입니다.`;
  }

  const 철수 = new User2();
  console.log(철수);  // User2 { intro: 'js전문가입니다.' }

  User2.skill = `ts`;
  const 철수2 = new User2();
  console.log(철수2); // User2 { intro: 'ts전문가입니다.' }



  /** 실습 */
  // 설명
  class User3 {
    private static x = 10;
    public static y = 20;
    protected z = 30;
  }
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
  class User4 {

    private static x = 10;
    public static y = 20;

    static addOne(파라미터: number) {
      User4.x += 파라미터;
    }

    static printX() {
      console.log(User4.x);
    }

  }
  User4.addOne(3); //이렇게 하면 x가 3 더해져야함
  User4.addOne(4); //이렇게 하면 x가 4 더해져야함
  User4.printX();  //이렇게 하면 콘솔창에 x값이 출력되어야함


  // 3
  class Square {

    constructor(public width: number, public height: number, public color: string) {
    }

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

  const 네모 = new Square(30, 30, 'red');
  네모.draw();
  네모.draw();
  네모.draw();
  네모.draw();

};

_static();