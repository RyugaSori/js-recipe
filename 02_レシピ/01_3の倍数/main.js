const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "fizz")
    }
    if (n % 5 === 0) {
      console.log(n + "buzz")
    }
    if (n % 15 === 0) {
      console.log(n + "fizzbuzz")
    } else {
      console.log(n)
    }
  }
}
