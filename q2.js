// Program for sorting array elements with and without inbuilt methods

let arr=[5,2,8,4,7,6,3,1]
arr.sort()
console.log(arr);


arr.sort((a,b) => a-b)  //ascending order

console.log(arr);

arr.sort((a,b) => b-a)  //desending order

console.log(arr);

console.log(`-------------------------`);
console.log("Sorting Without using inbuilt Method");


function sorting(arr){
    let n= arr.length
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}

sorting(arr)
console.log(arr);




