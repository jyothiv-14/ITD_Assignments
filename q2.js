/*2. Write logic to check if the user is 18 years or older than 18 years allow him to vote, 
else infrom him how many more years he needs to become a voter.*/



let age="7"

if(age>=18){
    console.log("You are eligible to vote")
}
else{
    let update= 18-age
    console.log("You need to wait: "+ update ,"years")
}