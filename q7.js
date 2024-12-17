// Write a program to symbol after 3 elements

let arr = [1,2,3,4,6,5,7,8,9]

let res =[]

function insertSymbol(arr,symbol){
    for(let i = 0;i<arr.length;i++){
        res.push(arr[i])
        if((i+1)%3 == 0 && i != arr.length-1){
            res.push(symbol)
        }
    }
    return res
}

let symbol = '@'

console.log(insertSymbol(arr,symbol));
