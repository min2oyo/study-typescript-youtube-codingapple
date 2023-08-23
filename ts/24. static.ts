// // 개념 1
// class User {
//   private static x = 10;  // 부모 class에 직접 부여됨 // 자식에게 안 물려 줌
//   y = 20;
// }

// let 자식 = new User();
// console.log(자식);  // User { y: 20 }
// /** 
//  *  추가
//  *  - 함수도 static 붙이기 가능
//  *  - extends로 class를 복사할 경우 static 붙은 것들도 따라옴
//  */



// // 개념 2
// class User2 {
//   static skill = `js`;
//   intro = User2.skill + `전문가입니다.`;
// }

// let 철수 = new User2();
// console.log(철수);  // User2 { intro: 'js전문가입니다.' }

// User2.skill = `ts`;
// let 철수2 = new User2();
// console.log(철수2); // User2 { intro: 'ts전문가입니다.' }

