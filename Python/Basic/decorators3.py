# Example from https://www.udemy.com/the-modern-python3-bootcamp/
# Keeping this for reference
from functools import wraps
# wraps preserves a function's metadata when it's decorated

def log_function_data(fn):
    @wraps(fn)
    # Now when add is called using this decorator the correct name and doc will be returned
    # without it, the doc would be the wrapper's I AM A WRAPPER FUNCTION
    def wrapper(*args, **kwargs):
        """I AM A WRAPPER FUNCTION"""
        print(f"You are about to call {fn.__name__}")
        print(f"Here's the documentation: {fn.__doc__}")
        return fn(*args, **kwargs)
    return wrapper

@log_function_data
def add(x, y):
    """Adds two numbers together"""
    return x + y

print(add(10, 30))
print(add.__doc__)