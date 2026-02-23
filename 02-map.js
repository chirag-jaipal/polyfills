Array.prototype.myMap = function (fnc) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    let ele = fnc(this[i], i, this);
    newArr.push(ele);
  }

  return newArr;
};

const arr = [1, 2, 3, 4, 5];
const returnedArr = arr.myMap((ele) => ele ** 2);
console.log(returnedArr);
