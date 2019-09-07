"use strict"

let notes = getSavedNotes();

const filters = {
    searchText: "",
    sortBy: "byEdited"
};

document.querySelector('#create-note').addEventListener("click", (e) => {
    id = uuidv4();
    notes.push({
        id: id,
        title: "",
        body: "",
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf()
    });
    saveNotes(notes);
    location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});

renderNotes(notes, filters);

window.addEventListener("storage", (e) => {
    if (e.key === "notes") {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
});

const bday = moment();
bday.year(1988).month(6).date(12);
console.log(bday.format("MMM D YYYY"));