import Hangman from "./hangman";
import getPuzzle from "./requests";

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
