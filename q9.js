//Write a function reverseArray(arr) that returns a new array with the elements of arr in reverse order.

function reverseArray(arr){

    let newarr=[]
    for(let i=arr.length-1;i>=0;i--){

        //newarr.concat(arr[i])
        newarr.push(arr[i])
    
    }

    //arr.reverse()
    return newarr
}

let arr=[1,2,3,4,5]
console.log(reverseArray(arr))