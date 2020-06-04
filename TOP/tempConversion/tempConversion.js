function ftoc(fahrenheit) {
  let temp = parseFloat(((fahrenheit - 32) * (5/9)).toFixed(1));
  return temp;
}

function ctof(celsius) {
  let temp = parseFloat((celsius * (9 / 5) + 32).toFixed(1));
  return temp;
}

module.exports = {
  ftoc,
  ctof
}