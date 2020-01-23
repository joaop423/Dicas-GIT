var toDos = document.querySelectorAll('p.toDo')
console.log(toDos);

for (let todo of toDos) {
    console.log(todo.textContent);
    
} 

var removeAll = function () {
    let notes = document.querySelectorAll('p.toDo')
    for (let note of notes) {
        note.remove()
        
    }
}

var createParagraph = function (textValue) {
    let paragraph = document.createElement('p')
    paragraph.className = 'toDo'
    paragraph.textContent = textValue
    document.querySelector('body').appendChild(paragraph)
}
var filters = {
    searchText: ''
}

document.querySelector("input#to-do-input").addEventListener('input', function (e) {
    filters.searchText = e.target.value
})


document.querySelector("button#remove-all").addEventListener('click',function () {
    removeAll();
    toDos = document.querySelectorAll('p.toDo')
})

document.querySelector("button#to-do-button").addEventListener('click',function () {
    createParagraph(filters.searchText);
    toDos = document.querySelectorAll('p.toDo')
})

