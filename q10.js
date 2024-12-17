// Write a program to factorial number

let num =9
let fact=1

if(num>0){
    for(let i=1;i<=num;i++){
        fact = fact*i
    }
    console.log(fact);
    
}
else{
    console.log("Doesnot have factorial");
    
}