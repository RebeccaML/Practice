const notes = [{
        title: "My next trip",
        body: "I would like to go to Finland"
    },
    {
        title: "To buy",
        body: "Lame, coffee, dutch oven"
    },
    {
        title: "More",
        body: "Just do more"
    },
    {
        title: "To write",
        body: "Fan fiction"
    }
];

const filters = {
    searchText: ""
};

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector("#notes").innerHTML = "";
    filteredNotes.forEach(function(note) {
        const noteElement = document.createElement("p");
        noteElement.textContent = note.title;
        document.querySelector("#notes").appendChild(noteElement);
    });
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener("click", function (e) {
    console.log("Test");
    console.log(e);
    e.target.textContent = "Button clicked";
});

document.querySelector("#search-text").addEventListener("input", function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector("#name-form").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(e.target.elements.firstName.value);
    e.target.elements.firstName.value = "";
});

// const paragraphs = document.querySelectorAll("p");
// paragraphs.forEach(function(p) {
//     console.log(p);
// });
// paragraphs.forEach(function(p) {
//     p.textContent = "Censored!";
// });

// const newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new element created with JavaScript.";
// document.body.appendChild(newParagraph);