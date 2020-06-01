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


//Chessboard

let rowWidth = 8;
let rowHeight = 8;
let row = "";
for (let i = 0; i < rowHeight; i++) {
  for (let j = 0; j < rowWidth; j++) {
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        row += " ";
      } else {
        row += "#";  
      }   
    } else {
      if (j % 2 === 0) {
        row += "#";
      } else {
        row += " ";
      }
    }
  }
  row += "\n";
}