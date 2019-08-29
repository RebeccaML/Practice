const noteId = location.hash.substring(1);
const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const dateElement = document.querySelector("#last-edited");
let notes = getSavedNotes();

let note = notes.find((note) => note.id === noteId);

if (!note) {
    location.assign("/index.html");
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener("change", (e) => {
    note.title = titleElement.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

bodyElement.addEventListener("change", (e) => {
    note.body = bodyElement.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

document.querySelector("#remove-note").addEventListener("click", (e) => {
    removeNote(note.id);
    saveNotes(notes);
    location.assign("/index.html");
});

window.addEventListener("storage", (e) => {
    if (e.key === "notes") {
        notes = JSON.parse(e.newValue);
    }
    let note = notes.find((note) => note.id === noteId);
    
    if (!note) {
        location.assign("/index.html");
    }
    
    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
});