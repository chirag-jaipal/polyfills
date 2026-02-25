Array.prototype.myIncludes = function (val, idx) {
  let startIndex = 0;

  if (idx >= this.length) return false;
  if (idx >= -this.length && idx < 0) {
    startIndex = idx + this.length;
  }
  if (idx > 0 && idx < this.length) {
    startIndex = idx;
  }

  for (let i = startIndex; i < this.length; i++) {
    let isSame = sameValueZero(val, this[i]);
    if (isSame) return true;
  }

  function sameValueZero(x, y) {
    if (typeof x === "number" && typeof y === "number") {
      return x === y || (x !== x && y !== y);
    }
    return x === y;
  }

  return false;
};

const arr = [1, , 3];
const res = arr.myIncludes(undefined);
console.log(res);
