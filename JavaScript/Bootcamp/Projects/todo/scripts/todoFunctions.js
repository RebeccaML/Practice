"use strict"

const getSavedList = () => {
    const todoJSON = localStorage.getItem("todoList");
    return todoJSON ? JSON.parse(todoJSON) : [];
};

const saveList = (todoList) => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

const removeItem = (id) => {
    const itemIndex = todoList.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
        todoList.splice(itemIndex, 1);
    }
};

const renderItems = (todoList, filters) => {
    const filteredItems = todoList.filter((item) => {
        const searchMatch = item.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideMatch = !filters.hideComplete || !item.completed;
        return searchMatch && hideMatch;
    });

    const incomplete = filteredItems.filter((item) => !item.completed);

    document.querySelector("#todo-list").innerHTML = "";
    document.querySelector("#todo-list").appendChild(generateSummaryDOM(incomplete));

    filteredItems.forEach((item) => {
        document.querySelector("#todo-list").appendChild(generateTodoDOM(item));
    });
};

const generateTodoDOM = (item) => {
    const itemElement = document.createElement("label");
    const containerElement = document.createElement("div");
    const checkbox = document.createElement("input");
    const textElement = document.createElement("span");
    const button = document.createElement("button");

    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = item.completed;
    containerElement.appendChild(checkbox);
    checkbox.addEventListener("change", (e) => {
        item.completed = checkbox.checked;
        saveList(todoList);
        renderItems(todoList, filters);
    });

    textElement.textContent = item.text;
    containerElement.appendChild(textElement);

    itemElement.classList.add("list-item");
    containerElement.classList.add("list-item__container");
    itemElement.appendChild(containerElement);
    
    button.textContent = "remove";
    button.classList.add("button", "button--text");
    textElement.textContent = item.text;

    containerElement.appendChild(textElement);
    itemElement.appendChild(button);

    button.addEventListener("click", (e) => {
        removeItem(item.id);
        saveList(todoList);
        renderItems(todoList, filters);
    });

    return itemElement;
};

const generateSummaryDOM = (filteredItems) => {
    const summary = document.createElement("h2");
    if (filteredItems.length > 1) {
        summary.textContent = `You have ${filteredItems.length} things left to do:`;
    }
    else if (filteredItems.length === 1) {
        summary.textContent = `You have ${filteredItems.length} thing left to do:`;
    }
    else {
        summary.textContent = `You have nothing left to do!`;
    }
    summary.classList.add("list-title");
    return summary;
};