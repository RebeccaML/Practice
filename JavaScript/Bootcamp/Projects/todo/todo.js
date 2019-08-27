let todoList = getSavedList();

const filters = {
    searchText: "",
    hideComplete: false
};

renderItems(todoList, filters);

document.querySelector("#hide-complete").addEventListener("change", function(e) {
    filters.hideComplete = e.target.checked;
    renderItems(todoList, filters);
});

document.querySelector("#search-text").addEventListener("input", function(e) {
    filters.searchText = e.target.value;
    renderItems(todoList, filters);
});

document.querySelector("#add").addEventListener("submit", function(e) {
    e.preventDefault();
    todoList.push({
        text: e.target.elements.chore.value,
        completed: false 
    });
    saveList(todoList);
    renderItems(todoList, filters);
    e.target.elements.chore.value = "";
});