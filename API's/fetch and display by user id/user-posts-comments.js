const fetchPost = async () => {
   const url = userPostBuildURL()
   const response =  await fetch(url)
   const userData =  await response.json()
   console.log(userData)
   const postdiv = document.getElementById('posts')
   for(const post of userData) {
    const postContainer = document.createElement('div')
    postContainer.innerHTML = `<h1>Postid: ${post.id}</h1> <p>title: ${post.title}</p> <p>body: ${post.body}`
    const cmtresponse =  await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    const cmtdata = await cmtresponse.json()
    console.log(cmtdata)
    cmtdata.forEach((cmt)=>{
        const childdiv = document.createElement('div')
        childdiv.setAttribute('style','backgroundcolor: lightblue; padding:5px;border: 1px solid black;margin:5px')
        childdiv.innerHTML = `<p>Comment id: ${cmt.id}</p> <p2>Name: ${cmt.name}</p> <p2>Email: ${cmt.email}</p> <p2>body: ${cmt.body}</p>`
        postContainer.appendChild(childdiv)

    })
    postdiv.appendChild(postContainer)
   }
   /* For each post, make another GET request to fetch the comments using the endpoint https://jsonplaceholder.typicode.com/comments?postId=<postId>.
   Display the posts and comments in an organized manner, ensuring each post is listed with its associated comments. */
}

const userPostBuildURL = () => {
    const userid = document.getElementById('userid') 
    console.log(userid)
    const userpost = userid.value
    console.log(userpost)
    return `https://jsonplaceholder.typicode.com/posts?userId=${userpost}`
}




document.querySelector('button').addEventListener('click',fetchPost)

