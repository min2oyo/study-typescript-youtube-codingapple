/** narrowing 5가지 방법 */

// 1. 일반
const subject1 = document.querySelector(`#title`);
if (subject1 != null) {
  subject1.innerHTML += ` 반가워요1`;
}

// 2. instanceof (추천)
const subject2 = document.querySelector(`#title`);
if (subject2 instanceof Element) {  // Object instanceof Class
  subject2.innerHTML += ` 반가워요2`;
}

// 3. assertion
const subject3 = document.querySelector(`#title`) as Element;
subject3.innerHTML += ` 반가워요3`;

// 4. optional chaining
const subject4 = document.querySelector(`#title`);
if (subject4?.innerHTML != undefined) {
  subject4.innerHTML += ` 반가워요4`;
}

// 5. strict mode off in tsconfig.json

// Element 상속
const link = document.querySelector(`.link`);
if (link instanceof HTMLAnchorElement) {
  link.href = `https://kakao.com`;
}
/**
  HTMLAnchorElement
  - href, style, class, id
  HTMLButtonElement
  - <button>
  HTMLHeadingElement
  - <h1>
  HTMLImageElement
  - <img>
 */

// eventListener
const button = document.querySelector(`button`);
button?.addEventListener(`click`, () => { // undefinced error 안 남
  alert(`안녕`);
});

// img
const img = document.querySelector(`img`);
if (img instanceof HTMLImageElement) {
  img.src = `/images/change.png`;
}

// link 한 번에 변경
const links = document.querySelectorAll('.naver');
links.forEach((x) => {
  if (x instanceof HTMLAnchorElement) {
    x.href = 'https://kakao.com';
  }
});