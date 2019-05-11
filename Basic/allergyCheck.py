# Find whether a string input by the user includes various words
# Assignment for an edX course

input_test = input("Enter some things eaten in the last 24 hours: ")

# Input is converted to lowercase to match tests

print("It is","dairy" in input_test.lower(),"that",input_test,'contains "dairy"')
print("It is","nuts" in input_test.lower(),"that",input_test,'contains "nuts"')
print("It is","seafood" in input_test.lower(),"that",input_test,'contains "seafood"')
print("It is","chocolate" in input_test.lower(),"that",input_test,'contains "chocolate"')
