function findTheOldest(array) {
  
  let ages = [];
  
  for(let i = 0; i < array.length; i++) {
    if(!array[i].hasOwnProperty('yearOfDeath')) {
      ages.push(2020 - array[i].yearOfBirth)
    } else {
      ages.push(array[i].yearOfDeath - array[i].yearOfBirth);
    }
  }

  
  let oldestPerson;
  let oldest;
  for(let i = 0; i < ages.length; i++) {
    if(oldestPerson === undefined) {
      oldest = ages[i];
      oldestPerson = array[i];
    } else if(oldest < ages[i]) {
      oldest = ages[i];
      oldestPerson = array[i];
    }
  }
  return oldestPerson;
}

module.exports = findTheOldest;