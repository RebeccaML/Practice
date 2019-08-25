const todoList = [{
    text: "Finish chapter",
    completed: false
}, 
{
    text: "Publish chapter",
    completed: false
},
{
    text: "Eat lunch",
    completed: true
},
{
    text: "Make dinner",
    completed: false
},
{
    text: "Do JavaScript",
    completed: true
}];

const incomplete = todoList.filter(function(todo) {
    return !todo.completed;
});

const summary = document.createElement("h2");
summary.textContent = `You have ${incomplete.length} things left to do.`;
document.body.appendChild(summary);

incomplete.forEach(function(todo) {
    const paragraph = document.createElement("p");
    paragraph.textContent = `${todo.text}`;
    document.body.appendChild(paragraph);
});

document.querySelector("#add-item").addEventListener("click", function(e) {
    console.log("Add");
});

document.querySelector("#new-item").addEventListener("input", function(e) {
    console.log(e.target.value);
});