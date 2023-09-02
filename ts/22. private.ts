const _private = () => {

  /** 오리지널 자바스크립트 문법에서도 #이걸 속성옆에 붙이면 private 속성이 됩 */
  // 개념
  class User {

    public name;  // 모든 자식들이 이용 가능  // 생략 가능
    private familyName = `kim`;

    constructor(name: string) {
      this.name = name + this.familyName;
    }

    changeSecret() {
      this.familyName = `park`;
    }

  }

  let 유저1 = new User(`park`);
  // 유저1.familyName;  // 사용 못 함
  유저1.changeSecret(); // 사용 가능


  // 축약
  class Person {
    constructor(public name: string) { };
  }

  let 자식 = new Person(`kim`);
  console.log(`자식`, 자식);

};

_private();