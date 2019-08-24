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

// todoList.splice(2, 1);
// todoList.push("Eat");
// todoList.shift();

// console.log(`Todo: ${todoList[0]}.`);
// console.log(`Todo: ${todoList[todoList.length -1]}.`);
// console.log(`You have ${todoList.length} things to do.`)

// todoList.forEach(function(todo, index) {
//     const num = index + 1;
//     console.log(`${num}. ${todo}`);
// });

// for (let i = 0; i < todoList.length; i++) {
//     console.log(`${i+1}. ${todoList[i]}`);
// }