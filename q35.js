// 35.  Write a function to generate the specified pattern.

// 1

// 2 9

// 3 8 10

// 4 7 11 14

// 5 6 12 13 15

function generatePattern(n) {
   
    let matrix = [];

    
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(i + 1).fill(0);  
    }

    let currentNum = 1;  

   
    for (let i = 0; i < n; i++) {
        matrix[i][0] = currentNum;
        currentNum++;
    }

  
    for (let i = 1; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (matrix[j][i] === 0) {
                matrix[j][i] = currentNum;
                currentNum++;
            }
        }
    }


    for (let i = 0; i < n; i++) {
        console.log(matrix[i].join(" "));
    }
}


generatePattern(5);




