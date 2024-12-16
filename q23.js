//23.  Write a function to find the second maximum and minimum numbers in an array.



let arr=[1,2,54,32,43,65,71]

let first_max=0
let second_max=0

function secondMaximun(arr){
    for(let el of arr){
        if(el>first_max){
            second_max=first_max
            first_max = el
        }
        else if(el>second_max && el != first_max){
            second_max=el
        }
        // else if(el == second_max){
        //     console.log("Duplicate numbers have been encountered");
            
        // }
    }
    return second_max
}

console.log("Second Maximum number in the given array is ",secondMaximun(arr))


function secondMinimumNumber(arr){
	let min = Infinity
	let secondMin = Infinity
	for(let i=0; i<arr.length;i++){
		if(arr[i] < min){
			secondMin = min;
			min = arr[i];
		}
		else if(arr[i] < secondMin && arr[i] !== min){
			secondMin = arr[i]
		}
	}
    return secondMin
	// if(secondMin === Infinity){
	// 	return "No Secondminimum number Found"
	// }
	// else{
	// 	return secondMin
	// }
}

console.log("Second Minimum Number in given Array ",secondMinimumNumber(arr))

