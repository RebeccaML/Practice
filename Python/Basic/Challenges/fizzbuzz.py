# Fizzbuzz challenge
# For all numbers from 1 to 100, if number is a multiple of 3 print Fizz
# if a multiple of 5 print Buzz, if a multiple of both print Fizzbuzz
# Otherwise print the number

def fizzbuzz():
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print("Fizzbuzz!")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

fizzbuzz()