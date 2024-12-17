//13.  Write a JavaScript code to extract numbers between two characters in a string and add them all.


let string = "He12l6lo"

let sum =0

for(let i=0;i<string.length;i++){
    if(string.charAt(i) == 1 || string.charAt(i) == 2 || string.charAt(i) == 3 || string.charAt(i) == 4 || string.charAt(i) == 5 || string.charAt(i) == 6 || string.charAt(i) == 7 || string.charAt(i) == 8 || string.charAt(i) == 9){
        sum = sum + parseInt(string.charAt(i))
    }
    
}

console.log(sum);
