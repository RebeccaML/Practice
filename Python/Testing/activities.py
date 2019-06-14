# Example from https://www.udemy.com/the-modern-python3-bootcamp/
# Used in the tests.py file
# Keeping this for reference

def eat(food, is_healthy):
    ending = "because it's delicious."
    if is_healthy:
        ending = "because it's healthy."
    return f"I'm eating {food}, {ending}"

def nap(num_hours):
    if num_hours >= 2:
        return f"Ugh I overslept. I didn't mean to nap for {num_hours} hours."
    else:
        return f"I'm feeling refreshed after my {num_hours} hour nap."