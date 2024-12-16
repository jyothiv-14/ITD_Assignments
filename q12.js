//12.  Write a program to add zeros after every 3 values in an array.

let arr = [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]

let res = []

for(let i=0;i<arr.length;i++){
    res.push(arr[i])
    if((i+1)%3 == 0 ){
       res.push('0')
    }
}

console.log(res);
