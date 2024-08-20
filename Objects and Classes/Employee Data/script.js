//Define a class named Employee that takes parameters for name, email, age, department, position, and salary.
//Inside the class's constructor, set these parameters as properties of the new object.
class Employee{
    constructor(name,email,age,department,position,salary){
        this.name = name
        this.email = email
        this.age = age
        this.department=department
        this.position=position
        this.salary=salary
    }
//Add a method named introduce inside the class that logs a greeting with the employee's name and position, e.g., "Hello, I am Sam, Software Developer".
    introduce(){
        console.log(`Hello, I am ${this.name},${this.position}`)
    }
//Add a method named displaySalary inside the class that logs the employee's salary formatted as a string, e.g., "Salary: $5000".
    displaySalary(){
        console.log(`Salary:$${this.salary}`)
    }
}

//Create an object named newEmployee with properties representing a new employee's name, email, age, department, position, and salary. Log this object to the console.
const newEmployee = new Employee('dev','dev93@yahoo.co.in',35,'IT',"developer",50000)

console.log(newEmployee)

//Create another object named manager with properties representing a manager. Log this object to the console.
const manager = new Employee('sha','sha90@gmail.com','33','IT','Designing',80000)

console.log(manager)

//Call the introduce method on the newEmployee object to log a greeting with the employee's name and position.
newEmployee.introduce()

//Call the displaySalary method on the manager object to log the salary details.
manager.displaySalary()