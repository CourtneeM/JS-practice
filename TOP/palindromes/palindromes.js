const palindromes = function(string) {
  var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
  string = string.toLowerCase().replace(regex, "");
  let reversedString = string.split("").reverse().join("");
  console.log(string, reversedString);
  if(string === reversedString) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindromes