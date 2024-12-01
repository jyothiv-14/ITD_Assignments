//Write a function sum(...numbers) that takes any number of arguments and returns the sum of those arguments.

function sum(){
    let add=0
    for (let arg of arguments){
        add+=arg
    }
    return add
}

console.log(sum(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1))