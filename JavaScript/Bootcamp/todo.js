const todoList = [{
    text: "Make starter",
    completed: true
}, 
{
    text: "Marinate pork",
    completed: true
},
{
    text: "Bake bread",
    completed: true
},
{
    text: "Make pickles",
    completed: true
},
{
    text: "Cook pork",
    completed: false
}];

const deleteTodo = function(todoList, itemText) {
    const index = todoList.findIndex(function(item) {
        return item.text.toLowerCase() === itemText.toLowerCase();
    });
    if (index >= 0) {
        todoList.splice(index, 1);
    }
}
deleteTodo(todoList, "bakebread");
console.log(todoList);

const findIncomplete = function(todoList) {
    return todoList.filter(function(item) {
        return !item.completed;
    });
}

console.log(findIncomplete(todoList));

const sortTodos = function(todoList) {
    todoList.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1;
        }
        else if (a.completed && !b.completed) {
            return 1;
        }
        else {
            return 0;
        }
    });
}

sortTodos(todoList);
console.log(todoList);

// todoList.forEach(function(todo, index) {
//     const num = index + 1;
//     console.log(`${num}. ${todo}`);
// });

// for (let i = 0; i < todoList.length; i++) {
//     console.log(`${i+1}. ${todoList[i]}`);
// }