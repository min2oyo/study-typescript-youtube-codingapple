const _protected = () => {

  /** 개념 */

  class User {
    protected x = 10; // private 기능에서 extends된 class에서도 사용 가능
  }

  class NewUser extends User {
    doThis() {
      this.x = 20;  // 사용 가능
    }
  }

  const 사람 = new NewUser();
  console.log(사람);  // NewUser { x: 10 }

};
_protected();