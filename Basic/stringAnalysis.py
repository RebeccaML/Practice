# Analyze a string to determine whether it's made up of all digits,
# all alphabetical characters or a mix/neither. If the string is a number,
# determines whether it's big or small.
# Assignment from an edX course

# Initialize test_string which will receive a value from user input
test_string = ""

# Function to analyze string
def str_analysis(test_string):
    if test_string.isdigit():
        if int(test_string) > 99:
            print(test_string,"is a big number!")
        else:
            print(test_string,"is kind of small.")
    elif test_string.isalpha():
        print(test_string,"is all in alphabetical characters.")
    else:
        print(test_string,"is neither all digits nor all alphabetical.")

# Ask for input until test_string is no longer empty
while test_string == "":
        test_string = input("Enter a string to analyze: ")

# Call function for analysis
str_analysis(test_string)
