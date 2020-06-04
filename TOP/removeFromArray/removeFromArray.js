function removeFromArray(arr, ...remove) {
  for (let item in arr) {
    for (let removeItem in remove) {
      if (arr[item] === remove[removeItem]) {
        delete arr[item];
      }
    }
  }
  arr = arr.filter(item => item);
  return arr;
}


module.exports = removeFromArray