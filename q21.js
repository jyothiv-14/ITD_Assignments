//21.  Reverse the array without using built-in functions


let arr = [3,5,66,4,32]

function reverseArray(arr){
    let rev=[]
    for(let i=arr.length-1;i>=0;i--){
        rev.push(arr[i])
    }

    return rev
}

console.log(reverseArray(arr));
