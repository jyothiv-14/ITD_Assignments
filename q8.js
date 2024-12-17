// write a program to for reversing a string

let string="jyothi"
let str=string.split('').reverse().join('')

console.log(` \nReverse string using Methods ${str}`)


console.log('\n-----------------------');



let res=""

for(let i=string.length-1;i>=0;i--){  
    res+=string[i]
}

console.log(` \nReverse string without using Methods ${res} \n`)