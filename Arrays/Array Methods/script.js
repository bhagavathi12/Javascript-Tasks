//Define a variable named numbers and assign it an array containing some numbers (e.g., 1, 2, 3, 4, 5).

numbers = [1,2,3,4,5]

//Call the forEach method to iterate over the numbers array. 
//log each number to the console. 
//Write the callback function as a function expression.
numbers.forEach(function(num)
{
    console.log(num)   
})
//Call the forEach method to iterate over the numbers array. 
//log each number multiplied by 2 to the console. 
//Write the callback function as a function expression.
numbers.forEach(function(num){
    console.log(`${num*2}`)
})

//Call the map method to create a new array called squaredNumbers that contains the square of each number in the numbers array. 
//Write the callback function as a function expression. 

let squaredNumbers = numbers.map(function(num) {
    return num * num;
});

//Log to the console the squaredNumbers.
console.log(squaredNumbers);

//Rewrite the call to the above map method to do the same thing, but change the callback function to use arrow function syntax. 
//Store the result in the same squaredNumbers array and log it to the console. 

let squareNumbers = numbers.map((num) => (num*num))
console.log(squareNumbers)

//Call the filter method to create a new array called evenNumbers that contains only the even numbers from the numbers array. Write the callback function as a function expression. 
const evenNumbers = numbers.filter(function(num){
    if((num%2)===0){
        return(num)
    }
})
//Log the evenNumbers array to the console.
console.log(evenNumbers)

/* Rewrite the call to the above filter method to do the same thing, but change the callback function to use arrow function syntax. Store the result in the same evenNumbers array and log it to the console. */
const even_Numbers = numbers.filter((num) => {
    if((num%2)==0)
        {return(num)}
})
console.log(even_Numbers)