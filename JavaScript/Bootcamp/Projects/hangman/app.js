const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");
const game1 = new Hangman("special flowers", 4);

puzzleElement.textContent = game1.puzzle;
guessesElement.textContent = game1.statusMessage;

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleElement.textContent = game1.puzzle;
    guessesElement.textContent = game1.statusMessage;
});

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    }
    else {
        console.log(puzzle);
    }
});

console.log("Do something else");

getCountry("FI", (error, countryName) => {
    if (error) {
        console.log(`Error: ${error}`);
    }
    else {
        console.log(countryName);
    }
});