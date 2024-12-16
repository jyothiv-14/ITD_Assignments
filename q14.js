// 14.  Write a program to find the count of the maximum prefix and suffix that are the same in a given string.

let count = 0;
let str = "abccba";
let len = str.length;

  for (let i = 0; i < len; i++) {
    if (str[i] === str[len - i - 1]) {
      count++;
    } else {
      break;
    }
  }

  console.log(count);
  



