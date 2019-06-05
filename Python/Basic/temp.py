# Practice file


def add(numbers):
      sum = 0
      for i in range(len(numbers)):
          numbers[i] = -numbers[i]
          sum -= numbers[i]
      return sum

myList = [2, 4, 6, 8, 10]
print(add(myList))
print(add(myList))
