// const paragraph = document.querySelector("p");
// console.log(paragraph);
// paragraph.remove();

const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function(p) {
    console.log(p);
});
paragraphs.forEach(function(p) {
    p.textContent = "Censored!";
});
paragraphs.forEach(function(p) {
    p.remove();
});
