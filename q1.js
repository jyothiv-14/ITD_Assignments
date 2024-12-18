


// 1.     Analyze the given input and output, write a program accordingly

//          Input a = [2,3,4,5,3,3,5,2,5,3] and Output [4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 5, 5, 5 ,5, 2, 2]

let  arr = [2, 3, 4, 5, 3, 3, 5, 2, 5, 3];

function sortByFrequency(arr) {
    const frequencyMap = new Map();
  
    arr.forEach(num => {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });
  

    const sortedArr = Array.from(frequencyMap.entries())
      .sort((a, b) => {
        
        if (b[1] !== a[1]) {
          return b[1] - a[1];
        }
        
        return a[0] - b[0];
      })
      .flatMap(([num, freq]) => Array(freq).fill(num)); 
  
    return sortedArr;
  }
  
 
  
  let output = sortByFrequency(arr);
  
  console.log(output); 
  