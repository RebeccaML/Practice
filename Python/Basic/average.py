# Find the average of an array of numbers
# Exercise from edx course:
# Computing in Python I: Fundamentals and Procedural Programming by Georgia Tech

grades = [100, 95, 93, 91, 90, 89,
        87, 87, 85, 85, 84, 82]
sum = 0
count = 0
for grade in grades:
    count += 1
    sum += grade
print(sum / count)
