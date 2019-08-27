const getSavedList = function () {
    const todoJSON = localStorage.getItem("todoList");

    if (todoJSON !== null) {
        return JSON.parse(todoJSON);
    } else {
        return [];
    }
};

const saveList = function (todoList) {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

const removeItem = function(id) {
    const itemIndex = todoList.findIndex(function (item) {
        return item.id === id;
    });
    if (itemIndex > -1) {
        todoList.splice(itemIndex, 1);
    }
};

const renderItems = function (todoList, filters) {
    const filteredItems = todoList.filter(function (item) {
        const searchMatch = item.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideMatch = !filters.hideComplete || !item.completed;
        return searchMatch && hideMatch;
    });

    document.querySelector("#todo-list").innerHTML = "";
    document.querySelector("#todo-list").appendChild(generateSummaryDOM(filteredItems));

    filteredItems.forEach(function (item) {
        document.querySelector("#todo-list").appendChild(generateTodoDOM(item));
    });
};

const generateTodoDOM = function (item) {
    const itemElement = document.createElement("div");
    const checkbox = document.createElement("input");
    const textElement = document.createElement("span");
    const button = document.createElement("button");

    checkbox.setAttribute("type", "checkbox");
    button.textContent = "x";
    textElement.textContent = item.text;
    itemElement.appendChild(checkbox);
    itemElement.appendChild(textElement);
    itemElement.appendChild(button);
    button.addEventListener("click", function() {
        removeItem(item.id);
        saveList(todoList);
        renderItems(todoList, filters);
    });
    return itemElement;
};

const generateSummaryDOM = function (filteredItems) {
    const summary = document.createElement("h2");
    summary.textContent = `You have ${filteredItems.length} things left to do:`;
    return summary;
};