# Check if a given word is a palindrome
# Challenge from CodeSignal.com

def checkPalindrome(inputString):
    # reverse the word using slicing
    reversed = inputString[::-1]
    # if the strings are equal then it's a palindrome
    if inputString == reversed:
        return True
    else:
        return False

print(checkPalindrome(input("Enter a word: ")))