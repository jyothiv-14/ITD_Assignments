//30.  Write a function to calculate the sum of total marks in an array of objects.

let students = [
    { name: 'John', marks: 85 },
    { name: 'Jane', marks: 90 },
    { name: 'Bob', marks: 78 },
    { name: 'Alice', marks: 92 }
  ];
  

  let sum = 0;
  for (let student of students) {
    sum += student.marks;
  }
  console.log(sum);
  