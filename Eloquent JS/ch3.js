// RECURSION

function isEven(n) {
  if(n === 0) {
    return true;
  } else if(n > 1) {
    return isEven(n - 2);
  } else if(n < 0) {
    return isEven(n + 2);
  }
  else {
    return false;
  }
}


// BEAN COUNTING

function countBs(string) {
  let numberBs = 0;
  for(let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      numberBs++;
    }
  }
  return numberBs;
}

function countChar(string, letter) {
  let numberChar = 0;
  for(let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      numberChar++;
    }
  }
  return numberChar;
}