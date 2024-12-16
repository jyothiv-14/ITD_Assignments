// 24.  Write a function to sort an array without using built-in methods.


let arr=[5,2,8,4,7,6,3,1]

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