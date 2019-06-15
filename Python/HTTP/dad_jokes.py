# Learning how to do HTTP requests in Python
# Apart from the initial setup (stuff found in first_request.py and params.py) I did this myself

import requests
from random import choice

def get_jokes(search):
    url = "http://www.icanhazdadjoke.com/search"
    response = requests.get(
        url,
        headers={"Accept": "application/json"},
        params={"term": search}
    )
    return response.json()

def display_joke(search, jokes):
    joke_count = len(jokes)
    if joke_count == 0:
        print(f"Sorry, I don't have any jokes about {search}! Please try again.")
    elif joke_count == 1:
        print(f"I've got one joke about {search}. Here it is:")
        print(jokes[0]["joke"]) 
    else:
        print(f"I've got {joke_count} jokes about {search}. Here's one:")
        print(choice(jokes)["joke"])

while True:
    search_term = input("Let me tell you a joke! Give me a topic or press 'q' to quit: ")
    if search_term.lower() == "q":
        print("Bye!")
        break
    jokes_list = get_jokes(search_term)
    display_joke(search_term, jokes_list["results"])


