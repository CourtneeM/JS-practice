// THE SUM OF A RANGE

function range(start, end, step = 1) {
  let arr = [];
  if(start < end) {
    for(let i = start; i <= end; i+= step) {
      arr.push(start);
      start += step;
    }
  } else if(start > end) {
    if(step = 1) {
      step = -1;
    }
    for(let i = start; i >= end ; i+= step) {
      arr.push(start);
      start += step;
    }
  }
  
  return arr;
}

function sum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// REVERSING AN ARRAY

function reverseArray(arr) {
  let arrLength = arr.length;
  let newArr = [];
  for(let i = 0; i < arrLength; i++) {
    newArr.push(arr.pop());
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  let holder;
  let arrLength = arr.length;
  for(let i = 1; i < arrLength; i++) {
    holder = arr.shift();
    arr.splice(-i, 0, holder);
  }
  holder = arr.pop();
  arr.unshift(holder);
  return arr;
}

// A LIST

function arrayToList(arr) {
  let list = null;
  arr.reverse().forEach((value, index) => {
    list = {
      value: value,
      rest: list,
    }
  });
  return list;
}

arrayToList([10, 20]);

function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

listToArray(arrayToList([10, 20, 30]));