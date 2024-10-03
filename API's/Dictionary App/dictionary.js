const fetchWord = async () => {
    const inputword = document.getElementById('input-word')
    if(inputword.value.trim() === ''){
        alert(`Please enter a valid word`)
    }
   const userInput = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputword.value}`)
   const word_definition = await userInput.json()
   wordDefinition(word_definition,inputword.value)
   inputword.value = ''
}

const wordDefinition = (apidata,word) => {
    const parentContainer = document.getElementById('meaning')
    parentContainer.classList.add('has-content')
    const wordelement = document.createElement('h1')
    wordelement.classList.add('word')
    wordelement.textContent = word
    parentContainer.innerHTML = ''
    parentContainer.appendChild(wordelement)
    
    apidata.forEach((data)=> {
        data.meanings.forEach((item)=> {
            const partOfSpeech = document.createElement('div')
            partOfSpeech.classList.add('partOfSpeech')
            console.log(item)
            partOfSpeech.innerHTML = `<h2> ${item.partOfSpeech} </h2>`
            parentContainer.appendChild(partOfSpeech)
            const definitionheading = document.createElement('h4')
            definitionheading.classList.add('def-heading')
            definitionheading.textContent = `Definition:`
            parentContainer.appendChild(definitionheading)
            item.definitions.forEach((def)=> {
                const definition = document.createElement('p')
                definition.classList.add('definition')
                definition.textContent = `${def.definition}`
                parentContainer.appendChild(definition)
               
                if(def.synonyms.length>0){
                    const synonymheading = document.createElement('h5')
                    synonymheading.classList.add('syn-heading')
                    synonymheading.textContent = `Synonyms:`
                    parentContainer.appendChild(synonymheading)
                    const synonymtext = document.createElement('p')
                    synonymtext.classList.add('synonym')
                    synonymtext.textContent = `${def.synonyms.join()}`
                    parentContainer.appendChild(synonymtext)
                }
                if(def.antonyms.length>0){
                    const antonymtext = document.createElement('p')
                    antonymtext.classList.add('antonym')
                    antonymtext.textContent = `Antonyms: ${def.antonyms.join()}`
                    parentContainer.appendChild(antonymtext)
                }
                if(def.example){
                    const exampletext = document.createElement('p')
                    exampletext.classList.add('example')
                    exampletext.textContent = `Example: ${def.example}`
                    parentContainer.appendChild(exampletext)
                }
               
            })

        })
    })

}


document.querySelector('button').addEventListener('click',fetchWord) 