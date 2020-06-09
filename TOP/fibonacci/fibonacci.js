function fibonacci(n) {
  let fib = [1, 1];

  n = +n;

  if(n < 0) {
    return "OOPS";
  }  

  for(let i = 0; i < n - 2; i++) {
    let previousNum = fib[fib.length - 2];
    let nextNum = fib[fib.length - 1];
    fib.push(previousNum + nextNum);
  }
  return fib[fib.length - 1];
}

module.exports = fibonacci;