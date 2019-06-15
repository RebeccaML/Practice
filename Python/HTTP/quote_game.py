# Project from https://www.udemy.com/the-modern-python3-bootcamp/
# Modified from scraping_project.py so that the initial scraping is done in another file,
# scrap_quotes.py, which produces a csv file. This is so the quotes don't have to be 
# scraped every time the game is played.
# The player has to guess who said the quote and each time they fail they are given a hint
# They get three hints - first is the author's birth date and location, then first initial,
# then last.

import requests
from bs4 import BeautifulSoup
from random import choice
from csv import DictReader

def get_quotes(filename):
    with open(filename, "r", encoding="utf-8") as file:
        csv_reader = DictReader(file)
        return list(csv_reader)

def get_hint(quote, num):
    response = requests.get("http://quotes.toscrape.com" + quote["link"])
    soup = BeautifulSoup(response.text, "html.parser")
    dob = soup.find(class_="author-born-date").get_text()
    born_loc = soup.find(class_="author-born-location").get_text()
    name = quote["author"].split(" ")
    if num == 1:
        return f"This person was born on {dob} in {born_loc}."
    elif num == 2:
        return f"This person's first name starts with {name[0][0]}"
    else:
        return f"This person's last name starts with {name[-1][0]}"

def play(quotes):
    print("Let's play the quote game! Here's a quote: ")
    random_quote = choice(quotes)
    print(random_quote["quote"])
    current_guess = 1
    while current_guess < 5:
        guess = input("Who said it? ")
        if guess == random_quote["author"]:
            print("That's correct!")
            current_guess = 5
        else:
            current_guess += 1
            if current_guess < 5:
                print("That's incorrect. Here's a hint: ")
                print(get_hint(random_quote, current_guess-1))
                print("Now guess again!")
            else:
                print(f'The answer was {random_quote["author"]}')

quotes = get_quotes("quotes.csv")
while True:
    play(quotes)
    restart = input("Do you want to play again? Y/N: ")
    if restart.upper() == "N":
        break
