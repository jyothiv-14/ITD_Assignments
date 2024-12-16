// 19.  Filter numeric palindromes from the input array

let arr = [123, 121, 456, 545, 789, 909];

function palindromes(arr) {
    return arr.filter(num => {
      let n1 = num.toString();
      return n1 === n1.split('').reverse().join('');
    });
  }
  

  
  console.log(palindromes(arr));
 