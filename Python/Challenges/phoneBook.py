# Hacker Rank challenge
# User inputs a number which is how many name/phone entries the dictionary will have
# This value is stored in n
# Then user inputs n name/phone numbers as a string of space-separated strings.
# Then the user inputs an unknown number of queries which will each be a name
# Task is to take this data and return whether or not each queried name appears in the dictionary
# If it does, return that key/value pair, if not print "Not found"

n = int(input())
phone_numbers = {}

for i in range(n):
    text = input().split()
    phone_numbers[text[0]] = text[1]

while True:
    try:
        query = input()
        if query in phone_numbers:
            print(query + "=" + phone_numbers[query])
        else:
            print("Not found")
    except:
        break
