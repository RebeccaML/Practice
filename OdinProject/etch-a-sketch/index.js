const grid = document.querySelector("#grid");
const reset = document.querySelector("#reset");
const changeSize = document.querySelector("#size");
let size = prompt("How many squares per side do you want for your grid?");
var gridBoxes;

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.classList.add("gridBox");
        grid.appendChild(div);
    }
    gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener('mouseover', (e) => {
            gridBox.classList.add("active");
        });
    });
}

reset.addEventListener('click', (e) => {
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove("active");
    });
});

changeSize.addEventListener('click', (e) => {
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove("active");
    });
    size = prompt("How many squares per side do you want for your grid?");
    createGrid(size)
});

createGrid(size);