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
    e.preventDefault();
    todoList.push({
        id: uuidv4(),
        text: e.target.elements.chore.value,
        completed: false 
    });
    saveList(todoList);
    renderItems(todoList, filters);
    e.target.elements.chore.value = "";
});