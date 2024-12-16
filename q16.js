// 16.  Write a program to remove the middle element from an array, or if the middle element is not there, 
// remove every element except the first and last ones.



let arr = [1,2,3,4,5]

let mid = arr.length / 2;
  
  if (arr.length % 2 == 0) {
    console.log([arr[0], arr[arr.length - 1]]);
     
  } 
  else {
    console.log(arr.slice(0, mid).concat(arr.slice(mid + 1)));

  }