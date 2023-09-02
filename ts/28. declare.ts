/** 개념 */
declare const data_a: number; // data.js에 있는 변수  // tsconfig.json의 allowJs를 키면 declare안 써도 된다는데, 그래도 어떤 다른 오류남
console.log(data_a);

const _declare = () => {

  /** 로컬 모듈을 글로벌 하게 쓰고 싶을 때 사용 */
  // declare global {
  //   type Dog = string;
  // }

  // export { }

};

_declare;