//Define an array called tasks. Populate the array with several objects, each representing a task in the to-do list with properties such as id, description, dueDate, status, and any other relevant details.

let tasks =[  {
    id: 1,
    description: "Finish project report",
    dueDate: "2024-08-25",
    status: "in-progress",
    priority: "high"
  },
  {
    id: 2,
    description: "Schedule team meeting",
    dueDate: "2024-08-22",
    status: "pending",
    priority: "medium"
  },
  {
    id: 3,
    description: "Buy groceries",
    dueDate: "2024-08-21",
    status: "completed",
    priority: "low"
  },
  {
    id: 4,
    description: "Call client for feedback",
    dueDate: "2024-08-23",
    status: "pending",
    priority: "high"
  },
  {
    id: 5,
    description: "Prepare presentation slides",
    dueDate: "2024-08-26",
    status: "not started",
    priority: "medium"
  }]
//Create a class called Task that can be used to create new task objects, which can then be added to the tasks array.
class Task{
    //The class should have a constructor that initializes the properties: id, description, dueDate, status, and any other relevant details.
    constructor(id,description,dueDate,status,priority){
        this.id = id,
        this.description = description,
        this.dueDate = dueDate,
        this.status = status,
        this.priority=priority
    }
  }
//Define a function called displayTasks.
function displayTasks(arr){
    //Use the forEach method to iterate over the tasks array.Log each task in the format: TaskDescription - DueDate (Status).
    arr.forEach((task)=>(console.log(`${task.description}-${task.dueDate}(${task.status})`))) 
}
//Define a function called addTask that takes task details as input: id, description, dueDate, status.
function addTask(id,description,dueDate,status,priority,arr){
    //Inside the function, create a new task object using the Task class.
    const newObj = new Task(id,description,dueDate,status,priority)
    //Add the new task object to the tasks array.
    arr.push(newObj)
    console.log(arr)
}
//Define a function called updateTask that takes a task id and a status as arguments.
function updateTask(id,status,arr){
    //Use the find method to locate the task with the matching id in the tasks array.
   const task=arr.find((task)=>(task.id === id))
   //If the task is found, update its details.
   task.status = status
}
//Define another function called updateTaskWithMap, which does the same thing as updateTask, but uses the map function instead.
function updateTaskwithMap(id,status,arr){
   const taskArray=arr.map((task)=>(task.id === id)?task:null)
   const task_filtered = taskArray.filter((task)=>(task!== null))[0]
   task_filtered.status = status
}
//Define a function called removeTask that takes a task id as an argument.
function removeTask(id,arr){
    //Use the filter method to create a new array that excludes the task with the matching id.
    return(arr.filter((task)=>(task.id !== id)))
}


displayTasks(tasks)
addTask(6,'Book tickers','30-08-2024','Not started','medium',tasks)
updateTask(4,'completed',tasks)
updateTaskwithMap(2,'completed',tasks)

//Update the tasks array with the new array.
tasks =removeTask(2,tasks)
console.log(tasks)