// Write a program that uses a for in loop to loop through an object and prints the key-value pairs.

let student = {
    name: "sachin",
    skills:["html",'css'],
    city: "bangalore"
  };
  
  for (let data in student) {
    console.log(`Key: ${data}, Value: ${student[data]}`);
  }
  