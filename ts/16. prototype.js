/** prototype은 유전자 */

// 기본
function machine() {
  this.x = `strike`;
  this.y = `snowball`;
}

machine.prototype.name = `kim`;

const nunu = new machine();

console.log(nunu.name); // kim
/**object에서 자료 뽑을 때 일어나는 일 (prototype chain)
 * 1. 직접 자료를 가지고 있으면 그거 출력
 * 2. 없으면 부모 유전자까지 뒤짐
 * 3. 없으면 부모의 부모 유저자까지.. 애미애비 없을 때까지 계속함
 */

// 응용
const array = [4, 2, 1];
const newArray = new Array(4, 2, 1);  // 위와 같음

Array.prototype.func = () => {
  return 1;
};

console.log(array.func());  // 1
