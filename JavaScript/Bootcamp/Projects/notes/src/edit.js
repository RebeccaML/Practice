import {
    initializeEditPage, generateLastEdited
} from "./views";
import {
    updateNote, removeNote
} from "./notes";

const noteId = location.hash.substring(1);
const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const dateElement = document.querySelector("#last-edited");
const removeElement = document.querySelector("#remove-note");

initializeEditPage(noteId);

titleElement.addEventListener("change", (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    });
    dateElement.textContent = generateLastEdited(note.updatedAt);
});

bodyElement.addEventListener("change", (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    });
    dateElement.textContent = generateLastEdited(note.updatedAt);
});

removeElement.addEventListener("click", (e) => {
    removeNote(noteId);
    location.assign("/index.html");
});

window.addEventListener("storage", (e) => {
    if (e.key === "notes") {
        initializeEditPage(noteId);
    }
});