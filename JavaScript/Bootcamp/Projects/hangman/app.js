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

getPuzzle("2").then((puzzle) => {
    console.log(puzzle);
}).catch((error) => {
    console.log(`Error: ${error}`);
});


getCountry("US").then((countryName) => {
    console.log(countryName);
}).catch((error) => {
    console.log(`Error: ${error}`);
});

getLocation().then((location) => {
    console.log(`You are in ${location.city}, ${location.region}, ${location.country}.`)
}).catch((error) => {
    console.log(`Error: ${error}`);
});

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