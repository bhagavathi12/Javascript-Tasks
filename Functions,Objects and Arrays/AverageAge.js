//Define an array called people.
//Populate the array with several objects, each representing a person with properties such as name and age.
const people = [
    {name:'bhaga',age:20},{name:'sha',age:22},{name:'sathya',age:17},{name:'roy',age:45},{name:'tom',age:56}
]
//Define a function called calculateAverageAge that takes one parameter: people (the array of person objects).
function calculateAverageAge(arr){
//Inside the function, initialize a variable to hold the sum of all ages.
    let ageSum = 0;
//Use the forEach method to iterate over the people array and accumulate the sum of their ages.
    arr.forEach((a) => (ageSum += a.age))
//Calculate the average age by dividing the total sum by the number of people in the array.Return the average age.
    return(ageSum/arr.length)
}

//Call the calculateAverageAge function with the people array as an argument.Log the result to the console.

avgAge=calculateAverageAge(people) 
console.log(`Average age:`,avgAge)