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

// const user = {
//     name: "Rebecca",
//     age: 31
// }
// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem("user", userJSON);

const userJSON = localStorage.getItem("user");
const user = JSON.parse(userJSON);
console.log(`${user.name} is ${user.age}`);

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


document.querySelector("#filter-by").addEventListener("change", function(e) {
    console.log(e.target.value);
});