function sumAll(a, b) {
  let arr = [];

  if (a < 0 || b < 0) {
    return "ERROR";
  }

  if (typeof a != "number" || typeof b != "number") {
    return "ERROR";
  }

  if (b < a) {
    for (let i = 0; i < a; i++) {
      arr.push(b++);
    }
    return(arr.reduce((c, b) => b + c));
  }
  
  for (let i = 0; i < b; i++) {
    arr.push(a++);
  }
  return(arr.reduce((c, a) => a + c));
}

module.exports = sumAll