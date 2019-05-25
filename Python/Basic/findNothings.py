# Challenge found here: http://www.pythonchallenge.com/pc/def/linkedlist.php
# Follow the chain of 'nothings'. First link is in page source
# Used urllib (first time) to follow the links. Each one has a number that takes you to
# the next 'nothing'. I found two 'nothings' and realised when refactoring that
# they are not the same. This code DOES find the nothings and therefore the answer so 
# for now I'll leave it this way. I plan on returning later to solve the puzzle and
# increase performance because this is slooooow.
# 'Nothings' were initially put into a list which was printed at the end but I removed
# that as it's more 'working out' than 'finding the answer'.

import urllib.request

def openUrl(nothing):
    # open each url and return the html content
    url ="http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=" + nothing
    response = urllib.request.urlopen(url)
    html = response.read()
    return html

def nothings():
    nothing = "12345" # initial nothing value
    for i in range(1, 400): # 400 number is from a hint on page source
        text = str(openUrl(nothing))
        nothing = "" # reset nothing value
        for char in text: # look for digits and use them to make new nothing value
            if char.isdigit():
                nothing += char
        if nothing == "": # if there were no digits then it's a hint/the answer
            print(text)
    return

nothings()