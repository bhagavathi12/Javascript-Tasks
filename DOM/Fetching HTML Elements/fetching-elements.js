htmlid =  document.getElementById('myDiv').textContent
console.log(htmlid)

htmlclass = document.getElementsByClassName('myClass')
/* The getElementsByClassName function returns a collection of all matching elements, allowing you to iterate over multiple elements. */
console.log(htmlclass)
res_class = htmlclass[0].textContent
console.log(res_class)

html_p = document.getElementsByTagName('p')
/* The getElementsByTagName function returns a collection of elements based on the specified tag name, which can include multiple elements. */
console.log(html_p)
res_p=html_p[1].textContent
console.log(res_p)
/* The querySelectorAll function returns a collection of all matching elements, allowing you to fetch multiple elements similar to getElementsByClassName but with more flexible and specific queries. */
html_span =  document.querySelectorAll('span')
console.log(html_span)
res_span = html_span[0].textContent
console.log(res_span)
/* The querySelector function returns only the first matching element, */ 
html_span1 = document.querySelector('span').textContent
console.log(html_span1)