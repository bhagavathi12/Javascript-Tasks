const handleChange = () => {
    document.querySelector('p').textContent = 'Text has been changed!'
}

const Changecolor = () => {
    document.querySelector('div').style.backgroundColor = 'yellow'
    document.querySelector('div').style.color = 'blue'
}

const addHtml = () => {
    const addhtml= document.getElementById('htmlContent')
    addhtml.innerHTML = `<h2>Heading</h2> 
    <p>This is a paragraph</p>`  
}

const togglevisibility = () => {
    const paragraph = document.getElementById('toggleparagraph')
    if(paragraph.style.display === 'block'){
        paragraph.style.display = 'none';
    }
    else{
        paragraph.style.display = 'block'
    }
}

document.querySelector('button').addEventListener('click',handleChange)

document.querySelector('div').addEventListener('mouseover',Changecolor)

document.getElementById('insertHTML').addEventListener('click',addHtml)

document.getElementById('toggle').addEventListener('click',togglevisibility)



