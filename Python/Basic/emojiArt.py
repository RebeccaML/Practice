# Exercise from https://www.udemy.com/the-modern-python3-bootcamp/

emoji = " 😃 "
for i in range(1, 11):
    count = i
    while count <= i:
        print(emoji * i)
        count += 1
        
spaces = 60
for i in range(1, 20, 2):
    count = i
    spaces -= 3
    while count <= i:
        print(" " * spaces + emoji * i)
        count += 1
