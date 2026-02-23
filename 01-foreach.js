Array.prototype.myForEach = function (fnc) {
  for (let i = 0; i < this.length; i++) {
    fnc(this[i], i, this);
  }
};

const arr1 = new Array(12, 21, 45, 90, 43);
arr1.myForEach((ele) => console.log(ele));
