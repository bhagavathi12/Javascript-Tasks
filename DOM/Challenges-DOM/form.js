const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted!')
}
const handleChangecolor = (e) => {
    const div = e.currentTarget
    if (div.style.backgroundColor === 'red'){
         div.style.backgroundColor = 'white'
    }else{
        div.style.backgroundColor = 'red'
    }
}

const handleBackgroundColor = (e) => {
    const divcolor = document.getElementById('bgcolor')
    const divbgcolor = e.currentTarget.textContent
    divcolor.style.backgroundColor = divbgcolor  
}

const button = document.querySelector('button').addEventListener('click',handleSubmit)

const divs = document.querySelectorAll('div')
divs.forEach(div=>{
    div.addEventListener('click',handleChangecolor)
})

const bgbutton = document.querySelectorAll('.color')
console.log(bgbutton)
bgbutton.forEach(button => {
    button.addEventListener('click',handleBackgroundColor)
})

 