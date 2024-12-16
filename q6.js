


//6.     Write a function to check if a given string is a palindrome.


let string = 'madam'

let rev = ''
 
for(let i=string.length-1;i>=0;i--){
    rev+=string[i]
}

if(string == rev){
    console.log("given string a palindrome");
    
}
else {
    console.log("Not a palindrome");
    
}
