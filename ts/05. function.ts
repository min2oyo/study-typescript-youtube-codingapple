// // return
// function 함수(x: number): number {
//   return x * 2;
// }

// // void
// function 함수2(x: number): void {
//   1 + 1;
// }

// // 이름 출력
// function sayHi(x?: string) {
//   console.log(x ? `안녕하세요 ` + x : '왜 입력 안 함?');
// }
// sayHi(`ria`);
// sayHi();

// // 자릿수세기
// function 자릿수세기(x: number | string): number {
//   return x.toString().length;
// }
// 자릿수세기(245);
// 자릿수세기(9567);


// // 결혼 가능 확률
// function 결혼가능하냐(money: number, house: boolean, charm: string): string | void {
//   let score = 0;
//   if (money >= 0) score += money;
//   if (house) score += 500;
//   if (charm === '상') score += 100;
//   if (score >= 600) return '결혼가능';
// }
// console.log(결혼가능하냐(100, true, '상'));
// /**
//   하지만 월 소득을 마이너스로 이상한 숫자를 입력하면 어쩌죠?
//   그런 것도 막으려면 코드를 어떻게 짜야할까요.
//   마지막으로 string이 아니라 '상' '중' '하' 라는 글자만 입력할 수 있게 더욱 엄격한 타입지정도 가능한데
//   그건 Literal type 시간에 알아봅시다.
//  */