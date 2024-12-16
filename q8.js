//8.     Write a function to find the maximum number in an array.

let arr = [1,2,3,4,588,6,7,88]



function maximum(arr){

    let max =0
    for(let i=0;i<arr.length;i++){
          if(arr[i]>max){
            max = arr[i]
        }
    }
    console.log(max);
}
maximum(arr)
