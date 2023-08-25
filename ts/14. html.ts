// /** narrowing 5가지 방법 */
// // 1. 일반
// let 제목1 = document.querySelector(`#title`);
// if (제목1 != null) {
//   제목1.innerHTML = `반가워요`;
// }
// // 2. instanceof (추천)
// let 제목2 = document.querySelector(`#title`);
// if (제목2 instanceof Element) {  // Object instanceof Class
//   제목2.innerHTML = `반가워요`;
// }

// // 3. assertion
// let 제목3 = document.querySelector(`#title`) as Element;
// 제목3.innerHTML = `반가워요`;

// // 4. optional chaining
// let 제목4 = document.querySelector(`#title`);
// if (제목4?.innerHTML != undefined) {
//   제목4.innerHTML = `반가워요`;
// }

// // 5. strict mode off in tsconfig.json

// // Element 상속
// let 링크 = document.querySelector(`.link`);
// if (링크 instanceof HTMLAnchorElement) {
//   링크.href = `https://kakao.com`;
// }
// /**
//   HTMLAnchorElement
//   - href, style, class, id
//   HTMLButtonElement
//   - <button>
//   HTMLHeadingElement
//   - <h1>
//   HTMLImageElement
//   - <img>
//  */

// // eventListener
// let 버튼 = document.querySelector(`button`);
// 버튼?.addEventListener(`click`, function () { // undefinced error 안 남
//   console.log(`안녕`);
// });

// // img
// let 이미지 = document.querySelector(`img`);
// if (이미지 instanceof HTMLImageElement) {
//   이미지.src = `change.png`;
// }

// // 링크 한 번에 변경
// let 링크2 = document.querySelectorAll('.naver');
// 링크2.forEach((a) => {
//   if (a instanceof HTMLAnchorElement) {
//     a.href = 'https://kakao.com';
//   }
// });