/** class는 object 뽑는 기계 */

// 1단계
const nunu1 = {
  q: `consume`,
  w: `snowball`
};

const garen1 = {
  q: `strike`,
  w: `courage`
};

// 2단계
function 기계(q, w) {
  this.q = q;
  this.w = w;
}

const nunu2 = new 기계(`consume`, `snowball`);
const garen2 = new 기계(`strike`, `courage`);

// 3단계
class Hero {
  constructor(q, w) {
    this.q = q;
    this.w = w;
  }
}