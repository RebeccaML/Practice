import sqlite3
import requests
from bs4 import BeautifulSoup

url = "http://books.toscrape.com/catalogue/category/books/fantasy_19/index.html"
ratings = ["Zero", "One", "Two", "Three", "Four", "Five"]
all_books = []

def scrape_books(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    books = soup.find_all("article")

    for book in books:
        title = get_title(book)
        price = get_price(book)
        rating = get_rating(book)
        all_books.append((title, price, rating))
    save_books(all_books)

def save_books(all_books):
    conn = sqlite3.connect("books.db")
    c = conn.cursor()
    c.execute("CREATE TABLE books (title TEXT, price REAL, rating INTEGER)")
    c.executemany("INSERT INTO books VALUES (?,?,?)", all_books)
    conn.commit()
    conn.close()

def get_title(book):
    return book.find("h3").find("a")["title"]


def get_price(book):
    price = book.select(".price_color")[0].get_text()
    return float(price.replace("Â£", ""))


def get_rating(book):
    rating = book.select(".star-rating")[0].get_attribute_list("class")[-1]
    return ratings.index(rating)

scrape_books(url)