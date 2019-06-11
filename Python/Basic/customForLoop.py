# Exercise from https://www.udemy.com/the-modern-python3-bootcamp/

def my_for(iterable, function):
    iterator = iter(iterable)
    while True:
        try:
            item = next(iterator)
        except StopIteration:
            break
        else:
            function(item)

my_for("hello", print)
my_for([1, 2, 3, 4, 5], print)
