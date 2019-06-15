# Project from https://www.udemy.com/the-modern-python3-bootcamp/
# The user is given a quote picked randomly from http://quote.toscrape.com
# They have to guess who said the quote and each time they fail they are given a hint
# They get three hints - first is the author's birth date and location, then first initial,
# then last.

import requests
from bs4 import BeautifulSoup
from random import choice

def get_quotes():
    quotes_list = []
    page = 1
    while True:
        response = requests.get("http://quotes.toscrape.com/page/" + str(page))
        soup = BeautifulSoup(response.text, "html.parser")
        quotes = soup.find_all(class_="quote")
        if quotes:
            for quote in quotes:
                text = quote.find(class_="text").get_text()
                author = quote.find(class_="author").get_text()
                link = quote.find("a")["href"]
                quotes_list.append({"quote": text, "author": author, "link": link})
            page += 1
        else:
            break
    return quotes_list

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

quotes = get_quotes()
while True:
    play(quotes)
    restart = input("Do you want to play again? Y/N: ")
    if restart.upper() == "N":
        break
