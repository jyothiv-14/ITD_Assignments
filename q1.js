//Program to find second max and second min

let arr=[2,2,2,2,2,2]

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

// let first_min=Infinity
// let second_min=Infinity


// function secondMinimum(first_min,second_min){

//     for(let num of arr){
//         if(num<first_min){
//             second_min=first_min
//             first_min=num
//         }
//         else if(num<second_min && num !== first_min){
//             second_min=num
//         }
//     }
//     if(second_min === Infinity){
//         return "no"
//     }
//     else{
//         return second_min
//     }
   

// }
// console.log("Second Minimum number in the given array is ",secondMinimum(arr))

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

