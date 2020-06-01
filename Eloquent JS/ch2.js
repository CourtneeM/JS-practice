// Looping a Triangle

let hash = "#";
for (let i = 0; i < 6; i++) {
  console.log(hash);
  hash += "#";
}


// FizzBuzz

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + ": FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i + ": Fizz");
  } else if (i % 5 === 0) {
    console.log(i + ": Buzz");
  }
}


//

