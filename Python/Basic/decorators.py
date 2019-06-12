# Example from https://www.udemy.com/the-modern-python3-bootcamp/
# Keeping this for reference

def be_polite(fn):
    def wrapper():
        print("What a pleasure to meet you!")
        fn()
        print("Have a great day!")
    return wrapper

@be_polite
def greet():
    print("My name is Rebecca.")

@be_polite
def rage():
    print("I HATE YOU!")

# this would have to be declared before calling greet() to apply be_polite 
# if the decorator wasn't used
# greet = be_polite(greet)

greet()
rage()