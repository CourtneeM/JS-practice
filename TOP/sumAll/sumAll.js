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


/* Alternate solution without Array.reduce()

function sumAll(a, b) {
  let arr = [];

  if (a < 0 || b < 0) {
    return "ERROR";
  }

  if (typeof a != "number" || typeof b != "number") {
    return "ERROR";
  }

  if (b < a) {
    let sum = b;
    for (let i = b + 1; i <= a; i++){
      sum += i;
    }
    return sum;
  }
  
  let sum = a;
  for (let i = a + 1; i <= b; i++){
    sum += i;
  }
  return sum;
}

*/




module.exports = sumAll