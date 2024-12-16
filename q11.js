// 11.  Write a function to count repeated characters in a string and print in a string format.

let string = "Helllo Hi"

function counting(str) {
    let count = {};
    for (let char of str) {
      if (count[char]) {
        count[char]++;
      } 
      else {
        count[char] = 1;
      }
    }
  
    let result = '';
    for (let char in count) {
      if (count[char] > 1) {
        result += `${char} appears ${count[char]} times, `;
      }
    }
  
    return result;
  }
  
 
  console.log(counting(string));
