# Exercise from https://www.udemy.com/the-modern-python3-bootcamp/
# Keeping for future reference
# Function accepts the keyword arguments first and second, which are numbers,
# operation, which dictates what should be done with them, make_float, a boolean
# dictating whether or not the result should be a float, and an optional message
# which is added to the front of the result before returning.
# If no message is provided, the default is 'The result is'

def calculate(**kwargs):
    result = 0
    if kwargs["operation"] == "add":
        result = kwargs["first"] + kwargs["second"]
    elif kwargs["operation"] == "subtract":
        result = kwargs["first"] - kwargs["second"]
    elif kwargs["operation"] == "multiply":
        result = kwargs["first"] * kwargs["second"]
    else:
        result = kwargs["first"] / kwargs["second"]
    if kwargs["make_float"]:
        result = float(result)

    result = kwargs.get("message", "The result is") + " " + str(result)
    return result

# Test cases
print(calculate(make_float=False, operation='add', message='You just added',
          first=2, second=4))  # "You just added 6"
print(calculate(make_float=True, operation='divide',
          first=3.5, second=5))  # "The result is 0.7"
