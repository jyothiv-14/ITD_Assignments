// 35.  Write a function to generate the specified pattern.

// 1

// 2 9

// 3 8 10

// 4 7 11 14

// 5 6 12 13 15

function generatePattern(n) {
    // Initialize an empty 2D array to store the pattern
    let matrix = [];

    // First, create the empty rows based on the number of rows 'n'
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(i + 1).fill(0);  // Each row will have (i + 1) elements
    }

    let currentNum = 1;  // Start from 1

    // Fill the first column of each row (i.e., 1, 2, 3, 4, ...)
    for (let i = 0; i < n; i++) {
        matrix[i][0] = currentNum;
        currentNum++;
    }

    // Fill the rest of the elements diagonally
    for (let i = 1; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (matrix[j][i] === 0) {
                matrix[j][i] = currentNum;
                currentNum++;
            }
        }
    }

    // Print the pattern
    for (let i = 0; i < n; i++) {
        console.log(matrix[i].join(" "));
    }
}

// Call the function to generate the pattern for 5 rows
generatePattern(5);




