// Write a program that finds the largest number in an array using a for of loop.

let arr=[10,300,6,7,8,60,4,100]
let largest=0

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
}
console.log(largest)