# Exercise from https://www.udemy.com/the-modern-python3-bootcamp/

from random import randint

random_number = randint(1, 10)
play_again = "y"

while play_again == "y":
    guess = int(input("Guess a number between 1 and 10: "))
    if guess > random_number:
        print("Too high!")
    elif guess < random_number:
        print("Too low!")
    else:
        print(f"You won! The number was {guess}.")
        play_again = input("Do you want to play again? (y/n): ")
        random_number = randint(1, 10)

print("Thanks for playing!")
