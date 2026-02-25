Array.prototype.myEvery = function (fnc) {
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue;
    let isTruthy = fnc(this[i], i, this);
    if (!isTruthy) return false;
  }
  return true;
};

const arr = [2, , 2];
console.log(arr.myEvery((currval) => currval === 2));
