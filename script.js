/* Get user input of a number, loop from 1 to number. Print "Fizz" if that number is divisble by 3, "Buzz" for 5, else print the number.  
*/

let valid = false;
let target = 0;
while(valid != true){
    target = parseInt(prompt("Please enter a positive integer you would like to FizzBuzz: "));
    target > 0 ? valid = true : alert("Not a valid number, please try again.")
}


for(let i = 1; i <= target; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else
        console.log(i);
}