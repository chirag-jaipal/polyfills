Array.prototype.myFind = function (fnc) {
  for (let i = 0; i < this.length; i++) {
    let isTruthy = fnc(this[i], i, this);
    if (isTruthy) return this[i];
  }
  return undefined;
};

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

console.log(inventory.myFind(({ name }) => name === "cherries"));
