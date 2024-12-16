//22.  Count the occurrences of each unique character in the string


let str = "Hello Hi"
let count = {};

  for (let char of str) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  console.log(count);
  