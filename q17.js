// 17.  Write a function to calculate the factorial of a number

let num  = 5

function factorial(a){
    let fact =1
    for(let i=1;i<=a;i++){
        fact = fact*i
    }
    return fact
}

console.log(factorial(num));
