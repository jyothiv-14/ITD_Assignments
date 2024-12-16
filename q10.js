//10.  Write a function to flatten a nested array.

let arr = [[1,2,3],[4,5,6],[7,8,9]]

function farr(arr){
    let flatened = []

    for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                    flatened = flatened.concat(farr(arr[i]))
            }
            else{
                flatened.push(arr[i])
            }

    }
    return flatened
    
}

console.log(farr(arr));
