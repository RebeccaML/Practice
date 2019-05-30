# Project from https://www.udemy.com/the-modern-python3-bootcamp/
# One player version against computer oponent
import random

print("Let's play 'Rock, Paper, Scissors!'")

choice = input("Enter your choice: ").lower()
computer = random.randint(0, 2)
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
        print("Paper covers rock. You lose!")
    else:
        print("Rock crushes scissors. You win!")
elif choice == "paper":
    if computer == "scissors":
        print("Scissors cut paper. You lose!")
    else:
        print("Paper covers rock. You win!")
elif choice == "scissors":
    if computer == "rock":
        print("Rock crushes scissors. You lose!")
    else:
        print("Scissors cut paper. You win!")
else:
    print("Valid inputs: rock, paper, scissors. Please try again.")
