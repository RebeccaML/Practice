import { getItems, toggleItem, removeItem } from "./items";
import { getFilters } from "./filters";

const renderItems = () => {
    const todoElement = document.querySelector("#todo-list");
    const filters = getFilters();
    const filteredItems = getItems().filter((item) => {
        const searchMatch = item.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideMatch = !filters.hideComplete || !item.complete;
        return searchMatch && hideMatch;
    });

    const incomplete = filteredItems.filter((item) => !item.complete);

    todoElement.innerHTML = "";
    todoElement.appendChild(generateSummaryDOM(incomplete));

    filteredItems.forEach((item) => {
        todoElement.appendChild(generateItemDOM(item));
    });
}

const generateItemDOM = (item) => {
    const itemElement = document.createElement("label");
    const containerElement = document.createElement("div");
    const checkbox = document.createElement("input");
    const textElement = document.createElement("span");
    const button = document.createElement("button");

    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = item.completed;
    containerElement.appendChild(checkbox);
    checkbox.addEventListener("change", (e) => {
        toggleItem(item.id);
        renderItems();
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
        renderItems();
    });

    return itemElement;
}

const generateSummaryDOM = (incompleteItems) => {
    const summary = document.createElement("h2");
    if (incompleteItems.length > 1) {
        summary.textContent = `You have ${incompleteItems.length} things left to do:`;
    }
    else if (incompleteItems.length === 1) {
        summary.textContent = `You have ${incompleteItems.length} thing left to do:`;
    }
    else {
        summary.textContent = `You have nothing left to do!`;
    }
    summary.classList.add("list-title");
    return summary;
}

export { renderItems, generateItemDOM, generateSummaryDOM };