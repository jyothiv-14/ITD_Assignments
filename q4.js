

//4.     Write a function that takes an array of numbers and returns a new array 
//where each element is doubled using the map method




function doubleArray(arr){
    return arr.map((number) => number+number)
}

let arr = [1,2,3,4,5]

let res = doubleArray(arr)

console.log(res);
