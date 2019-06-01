# This was a javascript exercise that I thought would be useful to rewrite in Python
# Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8 etc
# Every number after the first two is the sum of the two proceeding ones
# Input a number and the function returns that many numbers from the beginning of the sequence

def fibonacciGenerator(n):
    numbers = []
    for i in range(n):
        if i == 0:
            numbers.append(i)
        elif i == 1:
            numbers.append(i)
        else:
            numbers.append(numbers[i-2] + numbers[i-1])
    return numbers

print(fibonacciGenerator(int(input("Enter a number: "))))