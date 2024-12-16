// 18.  Write a function for input: ["1a1", "2aa3a", 'aabc31", "101", "1001", "a1", "3211", "11c"] and 
// output [101, 1001, 3211]


let arr = ["1a1", "2aa3a", "aabc31", "101", "1001", "a1", "3211", "11c"]

// let result = [];
//   for (let str of arr) {
//     let numStr = '';
//     for (let char of str) {
//       if (!isNaN(char)) {
//         numStr += char;
//       }
//     }
//     if (numStr.length > 1) {
//       result.push(parseInt(numStr));
//     }
//   }
// console.log(result);

function extractNumbers(arr) {
    return arr.filter(str => /^\d+$/.test(str)).map(str => parseInt(str));
  }
  

  
  console.log(extractNumbers(arr));
  
