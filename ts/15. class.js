/** class는 object 뽑는 machine */

// 1단계
const nunu = {
  x: `consume`,
  y: `snowball`
};

const garen = {
  x: `strike`,
  y: `courage`
};

// 2단계
function machine(x, y) {
  this.x = x;
  this.y = y;
};

const newNunu = new machine(`consume`, `snowball`);
const newGaren = new machine(`strike`, `courage`);

console.log(newNunu);   // machine { x: 'consume', y: 'snowball' }
console.log(newGaren);  // machine { x: 'strike', y: 'courage' }

// 3단계
class Hero {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const hero = new Hero(`hi`, `bye`);

console.log(hero);  // Hero { x: 'hi', y: 'bye' }