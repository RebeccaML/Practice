from pyfiglet import figlet_format
from colorama import init
from termcolor import colored

# Just for practicing importing external modules
# Termcolor won't work (at least, not in Windows) without colorama's init()

init()

def print_art(msg, color):
    valid_colors = ("red", "yellow", "green", "blue", "magenta", "cyan", "white")

    if color not in valid_colors:
        color = "magenta"

    ascii_art = figlet_format(msg)
    colored_ascii = colored(ascii_art, color=color)

    print(colored_ascii)

msg = input("What would you like to print? ")
color = input("What color? ")
print_art(msg, color)
