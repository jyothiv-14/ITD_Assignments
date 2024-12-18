//9.     Write a function to remove duplicate arrays from an array of arrays.

let  arrays = [
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 3],
    [7, 8, 9],
    [4, 5, 6]
];

function duplicate(arrays) {
    let result = [];
    for (let array of arrays) {
        if (!result.some(uniqueArray => JSON.stringify(uniqueArray) === JSON.stringify(array))) {
            result.push(array);
        }
    }
    return result;
}




let uniqueArrays = duplicate(arrays);
console.log(uniqueArrays);

