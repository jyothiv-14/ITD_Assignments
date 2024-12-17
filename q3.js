// Program to remove the duplicate elements in an array

let arr=[1,2,1,2,3,4,3,4,5,6,5,6]

let new_arr = []

for(let i=0; i<arr.length;i++){
    if(!new_arr.includes(arr[i])){
        new_arr.push(arr[i])
    }
}

console.log(new_arr);
