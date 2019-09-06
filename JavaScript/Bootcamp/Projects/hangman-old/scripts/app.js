const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");
let game;

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode);
    game.makeGuess(guess);
    render();
});

const render = () => {
    puzzleElement.innerHTML = "";
    guessesElement.textContent = game.statusMessage;

    game.puzzle.split("").forEach((letter) => {
        puzzleElement.innerHTML += `<span>${letter}</span>`;
    });
};

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game = new Hangman(puzzle, 5);
    render();
}

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// getPuzzle("2").then((puzzle) => {
//     console.log(puzzle);
// }).catch((error) => {
//     console.log(`Error: ${error}`);
// });


// getCurrentCountry().then((country) => {
//     console.log(country.name);
// }).catch((error) => {
//     console.log(error);
// });

// getLocation().then((location) => {
//     return getCountry(location.country);
// }).then((country) => {
//     console.log(country.name);
// }).catch((error) => {
//     console.log(`Error: ${error}`);
// });

// getCountry("FI").then((countryName) => {
//     console.log(countryName);
// }, (error) => {
//     console.log(`Error: ${error}`);
// });

// fetch("http://puzzle.mead.io/puzzle", {}).then((response) => {
//     if (response.status === 200) {
//         return response.json();
//     }
//     else {
//         throw new Error("Unable to fetch the puzzle.");
//     }
// }).then((data) => {
//     console.log(data.puzzle);
// }).catch((error) => {
//     console.log(error);
// });