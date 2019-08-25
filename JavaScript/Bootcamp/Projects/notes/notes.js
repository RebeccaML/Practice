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
    }
];

document.querySelector('#create-note').addEventListener("click", function (e) {
    console.log("Test");
    console.log(e);
    e.target.textContent = "Button clicked";
});

document.querySelector("#delete-all").addEventListener("click", function (e) {
    document.querySelectorAll(".note").forEach(function (note) {
        note.remove();
    });
});

document.querySelector("#search-text").addEventListener("input", function (e) {
    console.log(e.target.value);
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