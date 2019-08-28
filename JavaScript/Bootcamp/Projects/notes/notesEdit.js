const noteId = location.hash.substring(1);
const notes = getSavedNotes();

const note = notes.find(function(note) {
    return note.id === noteId;
});

if (note === undefined) {
    location.assign("/index.html");
}

const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");

titleElement.value = note.title;
bodyElement.value = note.body;

titleElement.addEventListener("change", function(e) {
    note.title = titleElement.value;
    saveNotes(notes);
});

bodyElement.addEventListener("change", function(e) {
    note.body = bodyElement.value;
    saveNotes(notes);
});

document.querySelector("#remove-note").addEventListener("click", function(e) {
    removeNote(note.id);
    saveNotes(notes);
    location.assign("/index.html");
});