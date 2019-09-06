"use strict"

let todoList = getSavedList();

const filters = {
    searchText: "",
    hideComplete: false
};

renderItems(todoList, filters);

document.querySelector("#hide-complete").addEventListener("change", (e) => {
    filters.hideComplete = e.target.checked;
    renderItems(todoList, filters);
});

document.querySelector("#search-text").addEventListener("input", (e) => {
    filters.searchText = e.target.value;
    renderItems(todoList, filters);
});

document.querySelector("#add").addEventListener("submit", (e) => {
    const text = e.target.elements.text.value.trim();
    e.preventDefault();

    if (text.length > 0) {
        todoList.push({
            id: uuidv4(),
            text,
            completed: false 
        });
        saveList(todoList);
        renderItems(todoList, filters);
        e.target.elements.chore.value = "";
    }
});