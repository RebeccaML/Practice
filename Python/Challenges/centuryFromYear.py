# Given a year, function will return what century it's in
# Challenge from CodeSignal.com
# Guaranteed constraints: 1 <= year <= 2005
# This needs better comments but I can't think of how else to explain it

def centuryFromYear(year):
    # A century is 100 years. This will catch all years divisible by 100.
    if year % 100 == 0:
        return year / 100
    else:
        # If not divisible by 100 then round down the answer and add 1 to find the right year.
        return year // 100 + 1

print(centuryFromYear(int(input("Enter a year: "))))