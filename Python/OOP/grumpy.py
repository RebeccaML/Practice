# Exercise from https://www.udemy.com/the-modern-python3-bootcamp/

class GrumpyDict(dict):
    def __repr__(self):
        print("NONE OF YOUR BUSINESS")
        return super().__repr__()

    def __missing__(self, key):
        print(f"YOU WANT {key.upper()}? WELL, IT AIN'T HERE!")

    def __setitem__(self, key, value):
        print("YOU WANT TO CHANGE THE DICTIONARY?")
        print("OKAY, FINE...")
        super().__setitem__(key, value)

    def __contains__(self, item):
        print("NO IT AIN'T IN HERE!")
        return False

data = GrumpyDict({"Class": "Enchanter", "Level": 105})
print(data)
data["City"] = "Neriak"
print(data)
"city" in data