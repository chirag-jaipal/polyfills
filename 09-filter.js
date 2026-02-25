Array.prototype.myFilter = function (fnc) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue;
    let isTruthy = fnc(this[i], i, this);
    if (isTruthy) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];
const result = arr.myFilter((val) => {
  if (Number.isFinite(val.id) && val.id !== 0) return true;
  return false;
});
console.log(result);
