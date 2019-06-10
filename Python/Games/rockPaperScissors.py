# Project from https://www.udemy.com/the-modern-python3-bootcamp/
# Two player version

print("Let's play 'Rock, Paper, Scissors!'")

player1_choice = input("Enter Player 1's choice: ")
player2_choice = input("Enter Player 2's choice: ")

if player1_choice == player2_choice:
    print(f"Both players chose {player1_choice}. It's a tie!")
elif player1_choice == "rock":
    if player2_choice == "paper":
        print("Paper covers rock. Player 2 wins!")
    elif player2_choice == "scissors":
        print("Rock crushes scissors. Player 1 wins!")
elif player1_choice == "paper":
    if player2_choice == "scissors":
        print("Scissors cut paper. Player 2 wins!")
    elif player2_choice == "rock":
        print("Paper covers rock. Player 1 wins!")
elif player1_choice == "scissors":
    if player2_choice == "rock":
        print("Rock crushes scissors. Player 2 wins!")
    elif player2_choice == "paper":
        print("Scissors cut paper. Player 1 wins!")
else:
    print("Valid inputs: rock, paper, scissors. Please try again.")
