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
    }
];

const filters = {
    searchText: ""
};

const renderItems = function (todoList, filters) {
    const filteredItems = todoList.filter(function (item) {
        return item.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    const incomplete = filteredItems.filter(function (todo) {
        return !todo.completed;
    });

    document.querySelector("#todo-list").innerHTML = "";

    const summary = document.createElement("h2");
    summary.textContent = `You have ${incomplete.length} things left to do:`;
    document.querySelector("#todo-list").appendChild(summary);

    incomplete.forEach(function (item) {
        const itemElement = document.createElement("p");
        itemElement.textContent = item.text;
        document.querySelector("#todo-list").appendChild(itemElement);
    });
}

renderItems(todoList, filters);

document.querySelector("#add-item").addEventListener("click", function (e) {
    console.log("Add");
});

document.querySelector("#new-item").addEventListener("input", function (e) {
    console.log(e.target.value);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
    filters.searchText = e.target.value;
    renderItems(todoList, filters);
});