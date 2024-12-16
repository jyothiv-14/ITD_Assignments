//32.  Write a function to reverse a string without using built-in methods.



let string = "John"

let rev = ""

for(let i=string.length-1;i>=0;i--){
    rev+=string[i]
}

console.log(rev);
