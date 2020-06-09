function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
  let total = 0;
  for(let n in arr) {
    total += arr[n];
  }
  return total;
}

function multiply (arr) {
  let total = 1;
  for(let n in arr) {
    total *= arr[n];
  }
  return total;
}

function power(a, b) {
	return a**b;
}

function factorial(a) {
  let total = 1;
  for(let i = 1; i <= a; i++) {
    total *= i;
  }
  return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
  power,
	factorial
}