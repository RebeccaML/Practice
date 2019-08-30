const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = "";
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter == " ") {
            puzzle += letter;
        } else {
            puzzle += "*";
        }
    });
    return puzzle;
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
        this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess) {
        this.remainingGuesses--;
    }
}

const first = new Hangman("special", 4);
const second = new Hangman("stuff", 3);

first.makeGuess("s");
first.makeGuess("e");
first.makeGuess("z");
console.log(first.remainingGuesses);

console.log(first.getPuzzle());
console.log(second.getPuzzle());

window.addEventListener("keypress", function(e) {
    const guess = String.fromCharCode(e.charCode);
    first.makeGuess(guess);
    console.log(first.getPuzzle());
    console.log(first.remainingGuesses);
});