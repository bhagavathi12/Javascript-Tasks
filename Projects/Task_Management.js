
document.querySelector('#task').addEventListener(submit,function(e)
{
    e.preventDefault();
    const tasktitle = document.getElementById('task-title').value.trim()
    const taskdescription = document.getElementById('description').value.trim()
    const date = document.getElementById('due').value
    /* const prioritylevel = document.getElementById('priority').value */
    const tasklist = document.getElementById(tasks)
    const listitem = document.createElement('li')
    tasklist.innerHTML = `<h2> ${tasktitle} </h2>`

    
})