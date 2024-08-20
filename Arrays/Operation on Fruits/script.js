//Define a variable named fruits and assign it an array containing the names of several fruits (e.g., "apple", "banana", "cherry", "date").

const fruits = ['apple','banana','cherry','date']
//Call the forEach method to iterate over the fruits array and log each fruit name capitalized to the console. Write the callback function as a function expression. 
console.log(`---ForEach Method---`)
fruits.forEach(function(fruit) {
    console.log(fruit.toUpperCase())
})

//Rewrite the call to the above foreach method to do the same thing, but change the callback function to use arrow function syntax.

console.log(`---ForEach Method || Arrow Function---`)
fruits.forEach((fruit)=>(console.log(fruit.toUpperCase())))

//Initialize a variable totalCharacters to 0. 

let totalCharacters = 0
//Use forEach to add the number of characters in each fruit name and update totalCharacters. Write the callback function as a function expression. 
fruits.forEach(function(fruit)
{
    totalCharacters = totalCharacters+(fruit.length)
})
//Log totalCharacters after the loop.
console.log(`totalCharacters :`,totalCharacters)

//Use the map method to create a new array called reversedFruits that contains each fruit name reversed. Write the callback function as a function expression. Log the reversedFruits array to the console. 

const reversedFruits = fruits.map(function(fruit){
    return(fruit.split('').reverse().join(''))
})
console.log(`---reversed---`,reversedFruits)

//Rewrite the call to the above map method to do the same thing, but change the callback function to use arrow function syntax. Store the result in the same reversedFruits array and log it to the console.

const reversed_Fruits = fruits.map((fruit)=>(fruit.split('').reverse().join('')))
console.log(`---reversed || Arrow function---`,reversed_Fruits)

//Use the filter method to create a new array called longFruits that contains only the fruit names with more than 5 characters. Write the callback function as a function expression. Log the longFruits array to the console. 

const longFruits = fruits.filter(function(fruit){
    return(fruit.length>5)
})
console.log(`---Length after 5---`,longFruits)

//Rewrite the call to the above filter method to do the same thing, but change the callback function to use arrow function syntax. Store the result in the same longFruits array and log it to the console.
const long_Fruits = fruits.filter((fruit)=>(fruit.length>5))
console.log(`---Length after 5 || Arrow Function---`,long_Fruits)

//Use the filter method to find fruits that contain the letter 'a'. Write the callback function as a function expression.

//Use the map method to return these fruits in uppercase. Write the callback function as a function expression.

//Store the result in an array called aFruitsUpper and log it to the console.

const aFruitsUpper = fruits.filter((fruit)=>(fruit.includes('a'))).map((fruit)=>(fruit.toUpperCase()))
console.log(aFruitsUpper)

