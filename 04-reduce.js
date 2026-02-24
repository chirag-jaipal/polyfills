Array.prototype.myReduce = function (fnc, initialValue) {
  let acc;
  let startIndex = 0;

  if (arguments.length < 2) {
    while (startIndex < this.length && !(startIndex in this)) {
      startIndex++;
    }

    if (startIndex >= this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    acc = this[startIndex];
    startIndex++;
  } else {
    acc = initialValue;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (!(i in this)) continue;
    acc = fnc(acc, this[i], i, this);
  }

  return acc;
};

const arr = [, , 3];
const val = arr.myReduce((acc, currVal) => acc + currVal);
console.log(val);
