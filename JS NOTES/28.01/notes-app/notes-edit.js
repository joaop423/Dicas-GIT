inputEditTitle = document.querySelector('input#note-title')
textAreaEditBody = document.querySelector('textarea#note-body')

const noteId = location.hash.substring(1)
var notes = getLocalStorageNotes()

var note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('notes.html')
}
clearEmptyTitle(note.title, note.body)

document.querySelector('button#save').addEventListener('click', function () {
    note.title = inputEditTitle.value
    note.body = textAreaEditBody.value
    saveNotes(notes)
    location.assign('notes.html')
})
