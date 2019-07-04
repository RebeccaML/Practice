var playerScore = 0;
var computerScore = 0;
const buttons = document.querySelectorAll(".choice");
const again = document.querySelector("#reset");
const playAgain = document.querySelector(".yes");
const notAgain = document.querySelector(".no");

function computerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function reset(again) {
    if (again === "yes") {
        playerScore = 0;
        computerScore = 0;
        document.getElementById("score").innerHTML = "<p>Computer: " + computerScore + " You: " + playerScore + "</p>";
        document.getElementById("result").innerHTML = "<p>Make your choice</p>";
        document.getElementById("roundResult").innerHTML = "<p></p>";
        document.querySelector("#reset").classList.toggle("hidden");
    } else {
        document.getElementById("result").innerHTML = "<p>Fine, be like that</p>";
    }
}

function playRound(playerSelection) {
    let computerSelection = computerChoice();
    const resultText = "<p>You played " + playerSelection + " and the computer played " + computerSelection;
    if (playerScore === 5) {
        document.getElementById("result").innerHTML = "<p>Yay you won! Play again?</p>";
        again.classList.toggle("hidden");
    } else if (computerScore === 5) {
        document.getElementById("result").innerHTML = "<p>Aww you lost :( Play again?</p>";
        again.classList.toggle("hidden");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        document.getElementById("roundResult").innerHTML = resultText + ". You won this round!</p>";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        document.getElementById("roundResult").innerHTML = resultText + ". You won this round!</p>";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        document.getElementById("roundResult").innerHTML = resultText + ". You won this round!</p>";
    } else if (playerSelection === computerSelection) {
        document.getElementById("roundResult").innerHTML = resultText + ". You tied this round!</p>";
    } else {
        computerScore += 1;
        document.getElementById("roundResult").innerHTML = resultText + ". You lost this round!</p>";
    }
    document.getElementById("score").innerHTML = "<p>Computer: " + computerScore + " You: " + playerScore + "</p>";
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(button.id);
    });
});

playAgain.addEventListener('click', (e) => {
    reset("yes");
});

notAgain.addEventListener('click', (e) => {
    reset("no");
});