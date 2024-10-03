
/* fetch - returns a Promise ----.then--callback method */
/* fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then(data => {
    const postdiv = document.getElementById('posts')
    data.forEach((p)=>
        {
        const childdiv = document.createElement('div')
        childdiv.innerHTML = `<h2>Userid: ${p.userId}</h2>
        <h2>id: ${p.id}</h2>
        <h2>title: ${p.title}</h2>
        <p>${p.body}</p>`
        postdiv.appendChild(childdiv)
    })
    }).catch((err)=> (console.log('error fetching data',err))) */
    
    //Async/Await -Asynchrounous Javascript

    const users = async () => {
       const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
       const userData =  await response.json()
       addDiv(userData)
       return userData
    }

    const addDiv = (data) => {
        const postdiv = document.getElementById('posts')
        data.forEach((p)=> {
            const childdiv = document.createElement('div')
            childdiv.setAttribute('style','backgroundcolor: lightblue; padding:5px;border: 1px solid black;margin:5px')
            childdiv.innerHTML = `
            <h2>Userid: ${p.userId}</h2>
            <h2>id: ${p.id}</h2>
            <h2>title: ${p.title}</h2>
            <p>${p.body}</p>`
            postdiv.appendChild(childdiv)
        })
    }

    
  users()
    
    

