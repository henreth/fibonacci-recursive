function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  // continually breaks down the calls until they are (fib(1)+fib(1)) ** n  + (fib(1)+fib(1)) ** n
  return fibonacci(n - 1) + fibonacci(n - 2);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
