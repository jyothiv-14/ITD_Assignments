// 26.  Write a function to convert a string from snake_case to camelCase.

let str = "I_am_jyothi"; 

function snake(str) {
    let result = "";
    let temp = false;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char == "_") {
            temp = true;
        } else {
            if (temp) {
                result += char.toUpperCase();
                temp = false;
            } else {
                result += char;
            }
        }
    }

    return result;
}



console.log(snake(str));  