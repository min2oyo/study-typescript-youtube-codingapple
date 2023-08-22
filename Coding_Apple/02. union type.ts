// /** 변수에 정의된 Union 타입은 할당과 동시에 OR 역할이 사라짐 */
// let 회원: number | string = 123;
// let 회원들: (number | string)[] = [1, `2`, 3];
// let 오브젝트: { a: string | number; } = { a: 123 };

// let 나이: string | number;
// // 나이 + 1; // error 남

// // 개인정보
// let user: string = 'kim';
// let age: undefined | number = undefined;
// let married: boolean = false;
// let 철수: (string | number | undefined | boolean)[] = [user, age, married];

// // 학교
// let 학교: {
//   score: (number | boolean)[],
//   teacher: string,
//   friend: string | string[];
// } = {
//   score: [100, 97, 84],
//   teacher: 'Phil',
//   friend: 'John'
// };
// 학교.score[4] = false;
// 학교.friend = ['Lee', 학교.teacher];