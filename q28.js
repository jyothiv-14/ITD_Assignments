// 28.  Write a function to add zeros after every 3 values in an array.


let arr = [1,2,3,4,5,6,7,8,9]
let res_arr = []

for(let i=0;i<arr.length;i++){
    res_arr.push(arr[i])
    if((i%3) == 0){
        res_arr.push('0')
    }
}

console.log(res_arr);
