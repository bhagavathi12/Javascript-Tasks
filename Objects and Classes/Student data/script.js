/* Define and Populate the student Object:
Define a variable named student and assign it an empty object.
Add properties to the student object for name, email, and age. Set their values to your own name, email, and age.
Log the name property of the student object to the console.

 */
const student = {
    name:'bhagavathi',
    age:31,
    email:'bhagavathi1992@gmail.com'
    
};

console.log(student.name)

/* Update the student Object:
Update the age property of the student object to a random value, say 10.
Log the age property of the student object to the console to see the updated property.
 */

student.age = 10
console.log(student.age)

/* Add Method and Nested Object to student:
Add a method called greet to the student object that logs a greeting message using the name property, e.g., "Hello, Alice!". Call the greet method to see the greeting message.
 */

student.greet = function(){
    console.log(`Hello ${this.name}`)
};

student.greet()

//Add a new object called address inside the student object as its property. The address object should have properties for country, city, and pin_code. Set their values to your address details.
student.address = {country: 'India',
    city: 'Nagercoil',
    pin_code:629001
}

//Log the country property of the address object to the console.
console.log(student.address.country)

//Update the pin_code property of the address object to a new pin code. Log the address object to the console to see the updated pin_code property.

student.address.pin_code = 560103

console.log(student.address)
console.log(student)

//Create a new object named friend with the same properties as the student object, but with values representing a friend's name, email, age, and address. The object should also have the greet method.

const friend = {
    name:'Sharan',
    age:33,
    email:'sharan90@gmail.com',
    address: 'Bangalore',
    pin_code:560102,
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
};

//Call the greet method and log the friend object to the console

friend.greet()
console.log(friend)

//Create a new object named topper with the same properties as the student object, but with values representing a topper’s name, email, age, and address. The object should also have the greet method.
const topper = {
    name:'Devi',
    age:30,
    email:'devi90@gmail.com',
    address: 'Chennai',
    pin_code:629402,
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
};

//Call the greet method and log the topper object to the console.
topper.greet()
console.log(topper)

//Define a class called Student that takes parameters for name, email, age, country, city, and pin_code.
class Student {
    constructor(Name,Age,PersonalEmail,country,city,pin_code){
        this.name = Name
        this.age = Age
        this.email = PersonalEmail
//Inside the class's constructor, set these parameters as properties of the new object. The country, city, and pin_code properties should be added inside the address object in a nested way.
        this.address = {
            Country: country,
            City: city,
            Pincode: pin_code       
    };
}
//Add the greet method inside the class.
    greet(){
        console.log(`Hello ${this.name}`)
    }
//Add a method called getFullAddress to the Student class that returns the full address of the student in this format (India, Bangalore - 560038).
    getFullAddress(){
        return(`${this.address.Country},${this.address.City}-${this.address.Pincode}`)
    }
}
//Create objects of the Student class for yourself, your friend, and another student. Log these objects to the console to see the created objects.
const mine = new Student('bhaga',30,'bhaga92@gmail.com','India','Bangalore',560102)
const sha = new Student('Sha',32,'sha90@gmail.com','India','Bangalore',560104)
const dev = new Student('dev',33,'dev23@yahoo.co.in','India','Chennai',600001)

//console logging
console.log(mine)
console.log(sha)
console.log(dev)
//Call the greet method on each student object and log the result to the console.

mine.greet()
sha.greet()
//dev.greet()
console.log(dev.getFullAddress())