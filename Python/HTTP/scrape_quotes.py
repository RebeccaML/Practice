# Generates the csv file needed for quote_game.py

import requests
from bs4 import BeautifulSoup
from csv import DictWriter
from time import sleep

def get_quotes():
    quotes_list = []
    page = 1
    while True:
        response = requests.get("http://quotes.toscrape.com/page/" + str(page))
        response.encoding = "utf-8"
        soup = BeautifulSoup(response.text, "html.parser")
        quotes = soup.find_all(class_="quote")
        if quotes:
            for quote in quotes:
                text = quote.find(class_="text").get_text()
                author = quote.find(class_="author").get_text()
                link = quote.find("a")["href"]
                quotes_list.append({"quote": text, "author": author, "link": link})
            page += 1
            sleep(1)
        else:
            break
    return quotes_list

def write_quotes(quotes):
    with open("quotes.csv", "w", encoding="utf-8", newline="") as file:
        headers = ["quote", "author", "link"]
        csv_writer = DictWriter(file, fieldnames=headers)
        csv_writer.writeheader()
        for quote in quotes:
            csv_writer.writerow(quote)

write_quotes(get_quotes())