//29.  Write a function to capitalize the first letter of each word in an array of strings.

let arr=['abc','ber','hfg','kou']

//  let cap = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));

//  console.log(cap); 


let capital = [];

for (let i = 0; i < arr.length; i++) {
  let str = arr[i];
  let capStr = str.charAt(0).toUpperCase() + str.slice(1);
  capital.push(capStr);
}

console.log(capital);