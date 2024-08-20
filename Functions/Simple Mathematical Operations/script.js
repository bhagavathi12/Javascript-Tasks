

//Callback Function
// Define a callback function named doubleNumber that takes a number and returns its double.

const doubleNumber = function(num){
    return(num+num)
}
//Define another callback function named squareNumber that takes a number and returns its square.
const squareNumber = function(num){
    return(num**2)
}
//Define another callback function named incrementNumber that takes a number and returns the number incremented by one.
const incrementNumber = function(num){
    return(num+1)
}


//Higher Order Function

/* Define a function named performOperation that accepts two parameters: num (a number on which to perform the operation) and operation (a callback function that specifies the operation to be performed on num).
Inside performOperation, call the operation function and pass num as an argument.
The function should return the result. */

const performOperation = function(num,fn){
    return(fn(num))
}

//Call performOperation with a number (e.g., 5) and the doubleNumber callback function, and log the result to the console.
console.log(`Double of 5 is ${performOperation(5,doubleNumber)}`)

//Call performOperation with a number (e.g., 5) and the squareNumber callback function, and log the result to the console.
console.log(`Square of 5 is ${performOperation(5,squareNumber)}`)

//Call performOperation with a number (e.g., 5) and the incrementNumber callback function, and log the result to the console.
console.log(`The next number of 5 is ${performOperation(5,incrementNumber)}`)