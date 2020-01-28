//NOTE OBJECT
renderNotes(getLocalStorageNotes())
var notes = getLocalStorageNotes()


//EVENT LISTENERS
document.querySelector('button#create-note').addEventListener('click', function () {
    const note = {
        id: uuidv4(),
        title: '',
        body: ''
    }
    note.title = checkEmptyTitle(note.title)
    notes.push(note)

    localStorage.setItem('notes', JSON.stringify(notes))

    console.log(notes); 
    generateDomStructure(note)
    location.assign(`edit.html#${note.id}`)
    
})