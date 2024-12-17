//Write a Function to print fibonacci series
  
let n=10 //no of iterations
let n1=0
let n2=1
let temp

for(let i=0;i<n;i++){
    console.log(n1);
    temp = n1+n2
    n1=n2
    n2= temp
}