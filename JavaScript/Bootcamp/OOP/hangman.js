const Hangman = function(word, guesses) {
    this.word = word;
    this.guesses = guesses;
}

const first = new Hangman("special", 4);
const second = new Hangman("stuff", 3);

console.log(first);
console.log(second);