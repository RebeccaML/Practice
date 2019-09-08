import uuidv4 from "uuid/v4";

let todoList = [];

const loadItems = () => {
    const todoJSON = localStorage.getItem("todoList");

    try {
        todoList = todoJSON ? JSON.parse(todoJSON) : [];
    }    
    catch (e) {
        todoList = [];
    }
};

const saveItems = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

const getItems = () => todoList;

const createItem = (text) => {
    todoList.push({
        id: uuidv4(),
        text,
        complete: false
    });
    saveItems();
};

const removeItem = (id) => {
    const itemIndex = todoList.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
        todoList.splice(itemIndex, 1);
        saveItems();
    }
};

const toggleItem = (id) => {
    const item = todoList.find((item) => item.id === id);

    if (item) {
        item.complete = !item.complete;
        saveItems();
    }
};

loadItems();

export { getItems, createItem, removeItem, toggleItem, loadItems };