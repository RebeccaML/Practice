# Challenge found here: http://www.pythonchallenge.com/pc/def/ocr.html
# Read a text file and look for rare chars
# Answer is equality

# Opens the file
inputFile = open("pc#2.txt")
file_string = inputFile.read()
inputFile.close() # Seems like it's just good practice to close the file when done
uniqueChars = [] # List to contain every unique character in the file

# Look for each unique character and put them in a list
# I feel I have the answer already at this point, but finished anyway
for char in file_string:
    if char not in uniqueChars:
        uniqueChars.append(char)

# For every character in the uniqueChars list, count how many times it apppears in the file
# and print before moving to the next unique char

for u_char in uniqueChars:
    count = 0
    for char in file_string:
        if u_char == char:
            count += 1
    print(u_char, "appears", count, "times.")