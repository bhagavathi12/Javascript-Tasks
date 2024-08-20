//Define a variable named temperatures and assign it an array containing several temperature readings in Celsius (e.g., -3, 14, 22, 5, -10).
const temperatures = [-3,14,22,5,-10]

temperatures.forEach(function(temp){
    console.log(temp)
})

//Rewrite the call to the above foreach method to do the same thing, but change the callback function to use arrow function syntax.
console.log(`----Arrow Function----`)
temperatures.forEach((tmp) => (console.log(tmp)))

//Call the forEach method to iterate over the temperatures array.
//convert each temperature to Fahrenheit using the formula (temperature * 9/5) + 32. 
//Log each converted temperature to the console. 
//Write the callback function as a function expression.

console.log(`---Celsius to Fahrenheit---`)
temperatures.forEach(function(temp){
    console.log(`${(temp*9/5)+32}`) 
})

//Rewrite the call to the above foreach method to do the same thing, but change the callback function to use arrow function syntax.
console.log(`---Celsius to Fahrenheit || Arrow Function---`)
temperatures.forEach((temp) => (console.log(`${(temp*9/5)+32}`)))
   

//Call the map method to create a new array called temperaturesInFahrenheit that contains the Fahrenheit equivalent of each temperature in the temperatures array. 
//Write the callback function as a function expression.
const temp_Fahrenheit= temperatures.map(function(tmp){
    return((tmp*9/5)+32)
})

// Log the temperaturesInFahrenheit array to the console. 

console.log(`---Fahrenheit Array---`,temp_Fahrenheit)

//Rewrite the call to the above map method to do the same thing, but change the callback function to use arrow function syntax. Store the result in the same temperaturesInFahrenheit array and log it to the console.

const tmp_Fahrenheit = temperatures.map((tmp)=> ((tmp*9/5)+32))
console.log(`---Fahrenheit Array ||Arrow Function---`,tmp_Fahrenheit)   

//Call the filter method to create a new array called belowFreezing that contains only the temperatures from the temperatures array that are below 0°C. Write the callback function as a function expression. Log the belowFreezing array to the console.
const belowFreezing = temperatures.filter(function(tmp){
    return(tmp<0)
})
console.log(`---belowFreezing---`,belowFreezing)

//Rewrite the call to the above filter method to do the same thing, but change the callback function to use arrow function syntax. Store the result in the same belowFreezing array and log it to the console.

const below_Freezing = temperatures.filter((tmp)=>(tmp<0))
console.log(`---belowFreezing || Arrow Function---`,belowFreezing)