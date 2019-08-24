const notes = [{
    title: "My next trip",
    body: "I would like to go to Finland"
},
{
    title: "to buy",
    body: "Lame, coffee, dutch oven"
},
{
    title: "More",
    body: "Just do more"
},
{
    title: "To write",
    body: "Fan fiction"
}];

const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        else if (b.title.toLowerCase() < a.title.toLowerCase()) { 
            return 1;
        }
        else {
            return 0;
        }
    });
};

sortNotes(notes);

// notes.forEach(function(item, index) {
//     console.log(item + " " + index);
// });

console.log(notes.length);
console.log(notes);

// for (let i = 0; i < notes.length; i++) {
//     console.log(notes[i]);
// }

// for (let i = notes.length - 1; i >= 0; i--) {
//     console.log(notes[i]);
// }
// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
//     return notes[index];
// }

const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
}

const findNotes = function(notes, query) {
    return notes.filter(function(note) {
        const titleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const bodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return titleMatch || bodyMatch;
    });
}

console.log(findNotes(notes, "buy"));

const note = findNote(notes, "to write");
console.log(note);


// const index = notes.findIndex(function(note, index) {
//     console.log(note);
//     return note.title === "To write";
// });

// console.log(index);