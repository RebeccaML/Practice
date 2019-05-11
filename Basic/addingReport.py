# Create a function to add numbers input by the user.
# Accepts one argument which determines whether numbers and total are printed ("A")
# or just the total is printed ("T")
# Exits the function and displays output once user enters Q to quit
# Call twice; once using "A" and once using "T"
# This would be better if the user chooses whether they want "A" or "T" but as is,
# this was the assignment.
# Final project for an edX course

def adding_report(report_type = "T"):
    total = 0
    items = ""

    while True:
        user_input = input("Input an integer to add to the total or \"Q\" to quit: ")
        if user_input.isdigit() == True:
            total += int(user_input)
            if report_type.upper() == "A":
                items = items + user_input + "\n"
        elif user_input.upper().startswith("Q"):
            if report_type.upper() == "A":
                print("Items\n" + items + "\nTotal\n" + str(total))
                break
            else:
                print("Total\n" + str(total))
                break
        else:
            print("Invalid input.")

adding_report("A")
adding_report("T")