const button = document.getElementById('click')
const handleClick = () => {
    console.log("Button click event executed")
}
button.addEventListener('click',handleClick)

const hoverdiv = document.getElementById("hover")
const handleHover = () => {
    console.log("Mouseover event on div executed")
}
hoverdiv.addEventListener('mouseover',handleHover)

const input = document.getElementById('input')
const handleInputChange = () => {
    console.log("Input event executed")
}

input.addEventListener('input',handleInputChange)