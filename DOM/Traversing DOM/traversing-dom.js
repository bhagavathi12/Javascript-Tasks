const ul1 = document.getElementById('list1')
console.log(ul1)
let child =  ul1.firstElementChild;
while(child){
    console.log(child.textContent)
    child = child.nextElementSibling
}

const ul2 = document.getElementById('list2')
console.log(ul2)
let child_ul2= ul2.lastElementChild
while(child_ul2){
    console.log(child_ul2.textContent)
    child_ul2=child_ul2.previousElementSibling
}

const ul3 = document.getElementById('list3')
console.log(ul3)
let child_ul3 = ul3.children
for(let i=0;i<child_ul3.length;i++){
    console.log(child_ul3[i].textContent)
}
