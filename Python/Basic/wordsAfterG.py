# Accept a quote from the user and print every word beginning with a letter after "g"
# Words should be printed in uppercase
# Assignment for an edX course

quote = input("Enter your quote: ")
word = ""

for letter in quote:
    if letter.isalpha():
        word += letter
    else:
        if word.lower() >= "h":
            print(word.upper())
            word = ""
        else:
            word = ""
# Needed for printing the last word if there's no non-alpha character after it
if word.lower() >= "h":
    print(word.upper())