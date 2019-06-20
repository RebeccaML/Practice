# Example file for working with os.path module
# From Learning Python on Lynda.com

import os
from os import path
import datetime
from datetime import date, time, timedelta
import time


def main():
    # Print the name of the OS
    print(os.name)

    # Check for item existence and type
print("Item exists: " + str(path.exists("text/textfile.txt")))
print("Item is a file: " + str(path.isfile("text/textfile.txt")))
print("Item is a directory: " + str(path.isdir("text/textfile.txt")))

# Work with file paths
print("Item path: " + str(path.realpath("text/textfile.txt")))
print("Item path and name: " + str(path.split(path.realpath("text/textfile.txt"))))

# Get the modification time
t = time.ctime(path.getmtime("text/textfile.txt"))
print(t)
print(datetime.datetime.fromtimestamp(path.getmtime("text/textfile.txt")))
print(path.getmtime("text/textfile.txt"))

# Calculate how long ago the item was modified
td = datetime.datetime.now() - datetime.datetime.fromtimestamp(
    path.getmtime("text/textfile.txt")
)
print("It has been " + str(td) + " since the file was modified.")
print("Or, " + str(td.total_seconds()) + " seconds.")

if __name__ == "__main__":
    main()
