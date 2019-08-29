const noteId = location.hash.substring(1);
const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const dateElement = document.querySelector("#last-edited");
let notes = getSavedNotes();

let note = notes.find(function(note) {
    return note.id === noteId;
});

if (note === undefined) {
    location.assign("/index.html");
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener("change", function(e) {
    note.title = titleElement.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

bodyElement.addEventListener("change", function(e) {
    note.body = bodyElement.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

document.querySelector("#remove-note").addEventListener("click", function(e) {
    removeNote(note.id);
    saveNotes(notes);
    location.assign("/index.html");
});

window.addEventListener("storage", function(e) {
    if (e.key === "notes") {
        notes = JSON.parse(e.newValue);
    }
    let note = notes.find(function(note) {
        return note.id === noteId;
    });
    
    if (note === undefined) {
        location.assign("/index.html");
    }
    
    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
});