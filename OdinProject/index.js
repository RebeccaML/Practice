        function computerPlay() {
            let options = ["rock", "paper", "scissors"];
            return options[Math.floor(Math.random() * options.length)];
        }

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return "tie"
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                return "win"
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                return "win"
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                return "win"
            } else {
                return "lose"
            }
        }

        function game() {
            var playerScore = 0;
            var computerScore = 0;
            for (let i = 0; i < 5; i++) {
                const playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
                const computerSelection = computerPlay()
                outcome = playRound(playerSelection, computerSelection)
                if (outcome === "win") {
                    playerScore += 1
                }
                else if (outcome == "lose") {
                    computerScore += 1
                }
            }
            if (playerScore > computerScore) {
                return "You won with a score of " + playerScore + ". The computer scored " + computerScore;
            }
            else if (computerScore > playerScore) {
                return "You lost with a score of " + playerScore + ". The computer scored " + computerScore;
            }
            else {
                return "It was a tie. You both scored " + playerScore;
            }
        }

        console.log(game());