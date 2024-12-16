//15.  Write a program to find the missing numbers in an array containing numbers from 1 to 100.


let full_arr = []

for(let i=1;i<=100;i++){
    full_arr.push(i)
}

console.log(full_arr);

full_arr.pop()
full_arr.pop()

let miss_arr = []


for (let i=1;i<=100;i++) {
    if (!full_arr.includes(i)) {
      miss_arr.push(i);
    }
  }


console.log(miss_arr);
