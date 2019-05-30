# Exercise from https://www.udemy.com/the-modern-python3-bootcamp/

age = input("How old are you? ")

if age:
    age = int(age)
    if age >= 21:
        print("You are good to enter and can drink!")
    elif age >= 18:
        print("You can enter, but need a wristband!")
    else:
        print("You cannot enter! :(")
else:
    print("Please enter an age!")
