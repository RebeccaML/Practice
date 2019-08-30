const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = ["c", "s"];
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

const first = new Hangman("special", 4);
const second = new Hangman("stuff", 3);

console.log(first.getPuzzle());
console.log(second.getPuzzle());