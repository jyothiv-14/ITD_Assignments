//34.  Write a function to find how many times each element is repeated in an array.

let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

let count = {};
  for (let element of arr) {
    if (count[element]) {
      count[element]++;
    } 
    else {
      count[element] = 1;
    }
  }

  console.log(count);
  