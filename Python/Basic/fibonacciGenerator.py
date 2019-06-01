# This was a javascript exercise that I thought would be useful to rewrite in Python
# Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8 etc
# Every number after the first two is the sum of the two proceeding ones
# Input a number and the function returns that many numbers from the beginning of the sequence

def fibonacciGenerator(n):
    numbers = []
    count = 0
    for i in range(n):
        if count == 0:
            numbers.append(count)
            count += 1
        elif count == 1 and len(numbers) == 1:
            numbers.append(count)
        else:
            count = numbers[i-2] + numbers[i-1]
            numbers.append(count)
    return numbers

print(fibonacciGenerator(int(input("Enter a number: "))))