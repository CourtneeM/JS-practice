function repeatString(string, numTimes) {
  let finalString = "";
  
  if (numTimes < 0) {
    return "ERROR";
  }

  for (let i = 0; i < numTimes; i++) {
    finalString += string;
  }

  return finalString;
}

module.exports = repeatString