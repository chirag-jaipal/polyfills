Array.prototype.mySome = function (fnc) {
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue;
    let isTruthy = fnc(this[i], i, this);
    if (isTruthy) return true;
  }
  return false;
};

const arr = [1, undefined, 1];
console.log(arr.mySome((x) => x !== 1));
