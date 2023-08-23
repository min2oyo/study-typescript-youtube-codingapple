/** class는 object 뽑는 기계 */

// 1단계
var nunu = {
  q: `consume`,
  w: `snowball`
};

var garen = {
  q: `strike`,
  w: `courage`
};

// 2단계
function 기계(q, w) {
  this.q = q;
  this.w = w;
}

var nunu = new 기계(`consume`, `snowball`);
var garen = new 기계(`strike`, `courage`);

// 3단계
class Hero {
  constructor(q, w) {
    this.q = q;
    this.w = w;
  }
}