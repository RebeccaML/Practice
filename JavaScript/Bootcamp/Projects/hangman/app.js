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

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        console.log(data);
    }
    else if (e.target.readyState === 4) {
            console.log("An error has occurred.");
        }
    });

request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3");
request.send();

const countryCode = "AU";
const countryRequest = new XMLHttpRequest();

countryRequest.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const country = data.find((country) => country.alpha2Code === countryCode);
        console.log(country.name);
    }
    else if (e.target.readyState === 4) {
            console.log("An error has occurred.");
        }
    });

countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
countryRequest.send();