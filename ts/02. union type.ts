const _union_type = () => {

  /** 개념 */

  // union
  const number: number | string = 123;  // 변수에 정의된 Union 타입은 할당과 동시에 OR 역할이 사라짐
  const numbers: (number | string)[] = [1, `2`, 3];
  const object: { a: string | number; } = { a: 123 };

  // 선언
  let what: string | number;
  // what + 1; // error 남

  // 개인정보
  const user: string = 'kim';
  const age: undefined | number = undefined;
  const married: boolean = false;
  const jia: (string | number | undefined | boolean)[] = [user, age, married];

  // 학교
  const 학교: {
    score: (number | boolean)[],
    teacher: string,
    friend: string | string[];
  } = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
  };
  학교.score[4] = false;
  학교.friend = ['Lee', 학교.teacher];

};

_union_type();