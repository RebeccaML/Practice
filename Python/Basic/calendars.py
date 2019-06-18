# Example file for working with Calendars
# From Learning Python on Lynda.com

# import the calendar module
import calendar

# create a plain text calendar
myCalendar = calendar.TextCalendar(calendar.SUNDAY)
c_str = myCalendar.formatmonth(2019, 6, 0, 0)
print(c_str)

# create an HTML formatted calendar
html_calendar = calendar.HTMLCalendar(calendar.SUNDAY)
h_str = html_calendar.formatmonth(2019, 6)
print(h_str)

# loop over the days of a month
# zeroes mean that the day of the week is in an overlapping month
for i in myCalendar.itermonthdays(2019, 6):
    print(i)

# The Calendar module provides useful utilities for the given locale,
# such as the names of days and months in both full and abbreviated forms
for name in calendar.month_name:
    print(name)

for day in calendar.day_name:
    print(day)

# Calculate days based on a rule: For example, consider
# a team meeting on the first Friday of every month.
# To figure out what days that would be for each month,
# we can use this script:
print("Raid nights will be on: ")
for m in range(1, 13):
    cal = calendar.monthcalendar(2019, m)
    weekone = cal[0]
    weektwo= cal[1]

    if weekone[calendar.FRIDAY] != 0:
        raidnight = weekone[calendar.FRIDAY]
    else:
        raidnight = weektwo[calendar.FRIDAY]

    print("%10s %2d" % (calendar.month_name[m], raidnight))
