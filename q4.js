// Program to remove duplicates in string

let str = "abacddef"
let new_str = ''

for(let i=0;i<str.length;i++){

    if(!new_str.includes(str[i])){
        new_str += (str[i])
    }
}

console.log(new_str);
