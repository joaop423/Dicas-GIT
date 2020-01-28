//FUNCTIONS

//apaga todas as divs de notas da pagina, e insere novas de acordo com o array de parametro(localStorageNotes)
var renderNotes = function (localNotes) {
    let divNotes = document.querySelectorAll('div.note')
    for (const divNote of divNotes) {
        divNote.remove()
    }
    for (let lnote of localNotes) {
        generateDomStructure(lnote)
    }
}

//retorna o array de notas da localStorage,caso vazio retorna um array vazio
var getLocalStorageNotes = function() {
    let localNotes = JSON.parse(localStorage.getItem('notes'));
    if (localNotes !== null) {
        return localNotes;
    } else {
        return []
    }  
    }

//remove a nota pelo seu id do array notes e do local Storage
var removeNoteById = function (id) {
    //remove do array notes
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id;
    })
    if (noteIndex>-1) {
        notes.splice(noteIndex,1) 
    }

    //remove do localStorage
    localStorage.removeItem('notes')
    localStorage.setItem('notes',JSON.stringify(notes))
    
}

//cria os elementos na pagina necessarios para a nota
var generateDomStructure = function (note) {
        //Declaring new elements
        let newDiv = document.createElement('div')
        let newNote = document.createElement('span')
        let rmButton = document.createElement('button')
        let editAnchor = document.createElement('a')

        //class name
        newDiv.className = 'note'
        
        //text content
        newNote.textContent = note.title
        rmButton.textContent = 'x'
        editAnchor.textContent = ' edit'
       
        //href
        editAnchor.href = `edit.html#${note.id}`
        //append Child
        document.querySelector('div#notes').appendChild(newDiv)
        newDiv.appendChild(rmButton)
        newDiv.appendChild(newNote)
        newDiv.appendChild(editAnchor)

        //event Listeners
        rmButton.addEventListener('click', function () {
            removeNoteById(note.id)
            renderNotes(getLocalStorageNotes())
        })
    } 

//verifica se o titulo está vazio caso estiver retorna 'Unnamed note', se não retorna o titulo 
var checkEmptyTitle = function (noteTitle) {
        if (noteTitle.length<1) {
            return 'Unnamed Note'
        }
        return noteTitle
    }

//verifica se o titulo da nota é 'Unnamed note', caso for, no edit ele limpa os inputs
var clearEmptyTitle = function(noteTitle,noteBody) {
    if (noteTitle!='Unnamed Note') {
        inputEditTitle.value = noteTitle
        textAreaEditBody.value = noteBody 
    }else{
        textAreaEditBody.value = noteBody
    }}

var saveNotes = function (notes) {
    localStorage.removeItem('notes')
    localStorage.setItem('notes',JSON.stringify(notes))
}