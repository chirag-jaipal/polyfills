Array.prototype.myFlat = function (depth = 1) {
  if (this.length === 0) return [];
  let newArr = [];

  let currDepth = 0;
  function flatten(currArr, depth) {
    for (let i = 0; i < currArr.length; i++) {
      if (!(i in currArr)) continue;
      else if (Array.isArray(currArr[i]) && currDepth < depth) {
        currDepth++;
        flatten(currArr[i], depth);
      } else {
        newArr.push(currArr[i]);
      }
    }
  }

  flatten(this, depth);
  return newArr;
};

const arr = [1, , 3, undefined, ["a", , ["d", , "e"]], null];
const flattenedArr = arr.myFlat(2);
console.log(flattenedArr);
