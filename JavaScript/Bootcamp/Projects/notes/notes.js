let notes = getSavedNotes();

const filters = {
    searchText: "",
    sortBy: "byEdited"
};

document.querySelector('#create-note').addEventListener("click", function (e) {
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

document.querySelector("#search-text").addEventListener("input", function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function(e) {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});

renderNotes(notes, filters);

window.addEventListener("storage", function(e) {
    if (e.key === "notes") {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
});

// const dateOne = new Date("July 12 1988 3:00:00");
// const dateTwo = new Date();
// const dateOneTimestamp = dateOne.getTime();
// const dateTwoTimestamp = dateTwo.getTime();

// if (dateOne < dateTwo) {
//     console.log(dateOne.toString());
// }
// else {
//     console.log(dateTwo.toString());
// }

const bday = moment();
bday.year(1988).month(6).date(12);
console.log(bday.format("MMM D YYYY"));