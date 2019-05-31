# Exercise from https://www.udemy.com/the-modern-python3-bootcamp/

player_input = input("Hey, how's it going? ")

while player_input.lower() != "stop copying me":
    print(player_input)
    player_input = input()

print("Fine, you win!")