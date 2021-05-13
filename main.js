const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtns = document.getElementsByClassName('delete-note');
const deleteAllBtn = document.querySelector('.delete-all');
const deleteAllModal = document.querySelector('.deleteAll-modal');
const cancelModalBtn = document.querySelector('.cancel-modal');
const deleteModalBtn = document.querySelector('.delete-modal');
const note = document.querySelector('.note');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('.error');
let selectedValue;

let cardID = 0;

const openPanel = () => {
    notePanel.style.display = 'flex';
}

const closePanel = () =>{
    notePanel.style.display = 'none';
    error.style.visibility = "hidden";
    textarea.value = '';
    category.selectedIndex = 0;
}

const addNote = () =>{
    if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote();
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible';
    }
}

const createNote = () =>{
    cardID++;
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', cardID);
    newNote.innerHTML = `
        <div class="note-header">
            <h3 class="note-title">${selectedValue}</h3>
            <button class="delete-note" onclick= "deleteNote(${cardID})">
            <i class="fas fa-times icon"></i>
            </button>
        </div>
        <div class="note-body"> ${textarea.value}
        </div>`

        switch (selectedValue){
            case 'Zakupy':
                newNote.style.backgroundColor = "#88f2b4";
                break;
            case 'Praca':
                newNote.style.backgroundColor = "#f2d788";
                break;
            case 'Inne':
                newNote.style.backgroundColor = "#b4ceed";
                break;
        }


    noteArea.appendChild(newNote);
    closePanel();
    
}

const selectValue = () =>{
    selectedValue = category.options[category.selectedIndex].text;
    // console.log(selectedValue);
}

const showDeleteModal = () =>{
    // console.log(noteArea.children.length);
    if (noteArea.children.length != 0){
        noteArea.style.opacity = ".4";
        deleteAllModal.style.display = "block";
    } 
}

const closeDeleteModal = () =>{
    deleteAllModal.style.display = "none";
    noteArea.style.opacity = "1";
}

const deleteAll = () =>{
    noteArea.innerHTML = '';
    deleteAllModal.style.display = "none";
    cardID = 0;
    noteArea.style.opacity = "1";
}

const deleteNote = id =>{
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete);
}


addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', showDeleteModal);
cancelModalBtn.addEventListener('click', closeDeleteModal);
deleteModalBtn.addEventListener('click', deleteAll);



