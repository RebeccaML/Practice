# Create and use a simple function that accepts user input and returns a string based on that
# Assigment for an edX course

def fishstore(fish, price):
    return "Fish Type: " + fish + " costs $" + price

fish_entry = input("Fish name: ")
price_entry = input("Fish price: ")

print(fishstore(fish_entry, price_entry))