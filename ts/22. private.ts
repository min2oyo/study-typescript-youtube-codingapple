/** 오리지널 자바스크립트 문법에서도 #이걸 속성옆에 붙이면 private 속성이 됩 */

const _private = () => {

  /** 개념 */
  // user
  class User {

    public name;  // 모든 child들이 이용 가능  // 생략 가능
    private familyName = `kim`;

    constructor(name: string) {
      this.name = `${name} ${this.familyName}`;
    }

    changeSecret() {
      this.familyName = `park`;
    }

  }

  const user = new User(`ria`);

  // user.familyName;  // 사용 못 함
  user.changeSecret(); // 사용 가능

  console.log(user);  // User { familyName: 'park', name: 'ria kim' }

  // 축약
  class Person {
    constructor(public name: string) { };
  }

  const child = new Person(`kim`);

  console.log(`child`, child);  // child Person { name: 'kim' }

};

_private();