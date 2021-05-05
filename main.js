const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtns = document.getElementsByClassName('delete-note');
const deleteAllBtn = document.querySelector('.delete-all');
const deleteAllModal = document.querySelector('.deleteAll-modal');
const cancelModalBtn = document.querySelector('.cancel-modal');
const deleteModalBtn = document.querySelector('.delete-modal');

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
            <button class="delete-note">
            <i class="fas fa-times icon"></i>
            </button>
        </div>
        <div class="note-body"> ${textarea.value}
        </div>`
    noteArea.appendChild(newNote);
    closePanel();
    
}

const selectValue = () =>{
    selectedValue = category.options[category.selectedIndex].text;
    // console.log(selectedValue);
}

const showDeleteModal = () =>{
    if (cardID !== 0){
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


addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', showDeleteModal);
cancelModalBtn.addEventListener('click', closeDeleteModal);
deleteModalBtn.addEventListener('click', deleteAll);


