const addListItem = () => {
    const list = document.getElementById('list')
    const listItems = list.getElementsByTagName('li')
    const newItem = document.createElement('li')
    newItem.textContent = 'New Item' + (listItems.length + 1)
    list.appendChild(newItem)
}

const removeLastListItem = () => {
    const list = document.getElementById('list')
    if(list.lastElementChild){
        list.removeChild(list.lastElementChild)
    }else{
        console.log("No items to remove")
    }
}

document.getElementById('addButton').addEventListener('click',addListItem)
document.getElementById('removeButton').addEventListener('click',removeLastListItem)