// Write a program that prints a pattern of stars using nested loops. Print a right-angled triangle pattern with 5 rows.

for(let i=1;i<=5;i++){
    let result=""
    for(let j=1;j<=i;j++){
        result = result+'* '
    }
    console.log(result)
}

