// Second largest in Nested Array

let arr2 = [[1,2,3],[78,65,43],[98,56,45]]

let arr= arr2.flat()
console.log(arr);


let first_max=0
let second_max=0

function secondMaximun(arr){
    for(let el of arr){
        if(el>first_max){
            second_max=first_max
            first_max = el
        }
        else if(el>second_max && el != first_max){
            second_max=el
        }
        // else if(el == second_max){
        //     console.log("Duplicate numbers have been encountered");
            
        // }
    }
    return second_max
}

console.log("Second Maximum number in the given array is ",secondMaximun(arr))
