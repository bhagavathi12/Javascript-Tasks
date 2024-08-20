let expenses = [{
    id: 1,
    name: "Groceries",
    amount: 1500.75,
    date: "2024-08-01",
    category: "Food"
  },
  {
    id: 2,
    name: "Electricity Bill",
    amount: 80.50,
    date: "2024-08-05",
    category: "Utilities"
  },
  {
    id: 3,
    name: "Internet Bill",
    amount: 1000.00,
    date: "2024-08-10",
    category: "Utilities"
  },
  {
    id: 4,
    name: "Coffee Shop",
    amount: 500.25,
    date: "2024-08-12",
    category: "Entertainment"
  },
  {
    id: 5,
    name: "Movie Ticket",
    amount: 120.00,
    date: "2024-08-15",
    category: "Entertainment"
  }]

class Expense{
    constructor(id,name,amount,date,category){
        this.id = id,
        this.name = name,
        this.amount = amount,
        this.date = date,
        this.category = category
    }
}
function displayExpenses(arr){
    arr.forEach((exp) => (console.log(`${exp.name}-${exp.amount}(${exp.date})`)))
}
function addExpense(id,name,amount,date,category,arr){
    const newObj = new Expense(id,name,amount,date,category)
    arr.push(newObj)
    console.log(arr)
}
function updateExpense(id,amount,arr){
    const expenseid=arr.find((exp) => (exp.id === id))
    expenseid.amount = amount
    console.log(arr)
}

function updateExpenseWithMap(id,amount,arr){
    const expenseid_array = arr.map((exp) => ((exp.id===id) ? exp:null))
    const expenseelement=expenseid_array.filter((exp)=>(exp !== null))[0]
    expenseelement.amount = amount
    console.log(arr)
}
function removeExpense(id,arr){
    return(arr.filter((exp)=> (exp.id !== id)))

}

displayExpenses(expenses)
addExpense(6,'Rent',15000,'03-08-2024','House-Rent',expenses)
console.log(expenses)

updateExpense(2,1000,expenses)
updateExpenseWithMap(2,2000,expenses)
expenses = removeExpense(4,expenses)
console.log(expenses)