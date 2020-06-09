const caesar = function(string, shift) {
  string = string.split("");
  let lowerCaseStart = 97;
  let lowerCaseEnd = 122;
  let upperCaseStart = 65;
  let upperCaseEnd = 90;

  while(shift > 26) {
    shift = shift - 26;
  }

  for(let i = 0; i < string.length; i++) {
    if(string[i].charCodeAt() >= lowerCaseStart && string[i].charCodeAt() <= lowerCaseEnd) {
      if(string[i].charCodeAt() + shift > lowerCaseEnd) {
        string[i] = String.fromCharCode(((string[i].charCodeAt() + shift) - lowerCaseEnd) + lowerCaseStart - 1);
      } else if (string[i].charCodeAt() + shift < lowerCaseStart) {
        string[i] = String.fromCharCode(((string[i].charCodeAt() + shift) + lowerCaseEnd) - lowerCaseStart + 1);
      } else {
        string[i] = String.fromCharCode(string[i].charCodeAt() + shift);
      }
    }

    if(string[i].charCodeAt() >= upperCaseStart && string[i].charCodeAt() <= upperCaseEnd) {
      if(string[i].charCodeAt() + shift > upperCaseEnd) {
        string[i] = String.fromCharCode(((string[i].charCodeAt() + shift) - upperCaseEnd) + upperCaseStart - 1);
      } else if(string[i].charCodeAt() + shift < upperCaseStart) {
        string[i] = String.fromCharCode(((string[i].charCodeAt() + shift) + upperCaseEnd) - upperCaseStart + 1);
      } else {
        string[i] = String.fromCharCode(string[i].charCodeAt() + shift);
      }
    }
  }

  return string.join("");
}

module.exports = caesar;


// [a-z] [97-122]
// [A-Z] [65-90]