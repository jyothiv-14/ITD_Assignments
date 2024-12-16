

//5.     Write a program to print numbers 1-10 with a delay of 1 second between each number.

for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, (i - 1) * 1000);
  }
  