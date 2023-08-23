/** prototype은 유전자 */

// 기본
function 기계() {
  this.q = `strike`;
  this.w = `snowball`;
}

기계.prototype.name = `kim`;

var nunu = new 기계();
console.log(nunu.name); // kim
/**object에서 자료 뽑을 때 일어나는 일 (prototype chain)
 * 1. 직접 자료를 가지고 있으면 그거 출력
 * 2. 없으면 부모 유전자까지 뒤짐
 * 3. 없으면 부모의부모 유저자까지.. 애미애비 없을 때까지 계속함
 */

// 응용
var 어레이 = [4, 2, 1];
var 어레이 = new Array(4, 2, 1);  // 위와 같음

Array.prototype.함수 = function () {
  return 1;
};
console.log(어레이.함수());
