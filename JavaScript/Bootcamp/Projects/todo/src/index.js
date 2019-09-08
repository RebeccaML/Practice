import { createItem, loadItems } from "./items";
import { renderItems } from "./views";
import { setFilters } from "./filters";

renderItems();

document.querySelector("#add").addEventListener("submit", (e) => {
    const text = e.target.elements.text.value.trim();
    e.preventDefault();

    if (text.length > 0) {
        createItem(text);
        renderItems();
        e.target.elements.text.value = "";
    }
});

document.querySelector("#hide-complete").addEventListener("change", (e) => {
    setFilters({
        hideComplete: e.target.checked
    });
    renderItems();
});

document.querySelector("#search-text").addEventListener("input", (e) => {
    setFilters({
        searchText: e.target.value
    });
    renderItems();
});

window.addEventListener('storage', (e) => {
    if (e.key === 'todoList') {
        loadItems();
        renderItems();
    }
})