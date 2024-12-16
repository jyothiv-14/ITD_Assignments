// 31.  Write a function to merge two arrays with extra zeros.

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let new_arr = []

for(let i=0;i<arr1.length;i++){
    new_arr.push(arr1[i])
    
}

for(let i=0;i<arr2.length;i++){
    new_arr.push(arr2[i])
    
}

console.log(new_arr);
