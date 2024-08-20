//Define a function called forEachArray that takes two arguments: an array and a callback function.
//Replicate the behavior of JavaScript's built-in forEach function.
//The forEachArray function should apply the callback function to each element of the array.

function forEachArray(arr,fn){
    for(i=0;i<arr.length;i++){
        fn(arr[i],i,arr) //callback
    }
}

const arr = [1,2,3,4,'hi','hello',8,12]

forEachArrayelement = (a,i,arr) => (console.log(`Value:${a} index:${i}`))
forEachArray(arr,forEachArrayelement) //function calling

 
//Define a function called mapArray that takes two arguments: an array and a callback function.
//Replicate the behavior of JavaScript's built-in map function.
//The mapArray function should apply the callback function to each element of the array and return a new array containing the transformed elements.

/*higher order function definition*/mapArray = (arr,fn) => {
    for(i=0;i<arr.length;i++){
        arrayusingmap.push(fn(arr[i],i,arr)) //callback
    }
}

mapArrayElement = (el,index,arr) => (el) //Callback

const arrayusingmap = [] //array declaration.
mapArray(arr,mapArrayElement)//function calling with array and function as arguments.
console.log(`----Maparray---`,arrayusingmap)

//Define a function called filterArray that takes two arguments: an array and a callback function.
//Replicate the behavior of JavaScript's built-in filter function.
//The function should apply the callback function to each element of the array and return a new array containing only the elements for which the callback function returns true.
filterArray = (arr,fn) =>{
    for(i=0;i<arr.length;i++){
        res=fn(arr[i],i,arr)//callback
        if(res === true){
            arrayusingfilter.push(arr[i])
        }
    }    
}

filterArrayElement = (el,index,arr) =>(typeof el === 'number')//this will return a boolean value. filter array methods returns a boolean value in the call back function. values will be filtered for true value.


const arrayusingfilter = []
filterArray(arr,filterArrayElement)
console.log(`--Array Using Filter--`,arrayusingfilter)


