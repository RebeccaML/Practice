const grid = document.querySelector("#grid");

for (let i = 0; i < 50 * 50; i++) {
    let div = document.createElement('div');
    div.classList.add("gridBox");
    grid.appendChild(div);
}

const gridBoxes = document.querySelectorAll(".gridBox");

gridBoxes.forEach((gridBox) => {
    gridBox.addEventListener('mouseover', (e) => {
        gridBox.classList.toggle("active");
    });
});

