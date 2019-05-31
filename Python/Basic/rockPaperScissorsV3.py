# Project from https://www.udemy.com/the-modern-python3-bootcamp/
# One player version against computer oponent
# Repeat until someone reaches the winning_score

from random import randint

computer_score = 0
player_score = 0
winning_score = 3

print("Let's play 'Rock, Paper, Scissors!'")

while player_score < winning_score and computer_score < winning_score:
    print(f"Player Score: {player_score} Computer Score: {computer_score}")
    choice = input("Enter your choice or press 'q' to quit: ").lower()
    if choice.lower().startswith("q"):
        print("You gave up!")
        break
    computer = randint(0, 2)
    if computer == 0:
        computer = "rock"
    elif computer == 1:
        computer = "paper"
    else:
        computer = "scissors"
    print(f"The computer plays: {computer}")

    if choice == computer:
        print(f"Both players chose {choice}. It's a tie!")
    elif choice == "rock":
        if computer == "paper":
            print("Paper covers rock. You lose this round!")
            computer_score += 1
        else:
            print("Rock crushes scissors. You win this round!")
            player_score += 1
    elif choice == "paper":
        if computer == "scissors":
            print("Scissors cut paper. You lose this round!")
            computer_score += 1
        else:
            print("Paper covers rock. You win this round!")
            player_score += 1
    elif choice == "scissors":
        if computer == "rock":
            print("Rock crushes scissors. You lose this round!")
            computer_score += 1
        else:
            print("Scissors cut paper. You win this round!")
            player_score += 1
    else:
        print("Valid inputs: rock, paper, scissors. Please try again.")

if player_score > computer_score:
    print(f"You win!\nYour score: {player_score}\nComputer score: {computer_score}")
elif computer_score > player_score:
    print(f"You lose!\nYour score: {player_score}\nComputer score: {computer_score}")
else:
    # Can only print if the player quits early while they are tied
    print("It's a tie!")
