# Exercise from https://www.udemy.com/the-modern-python3-bootcamp/


import requests
from bs4 import BeautifulSoup
from csv import writer

response = requests.get("https://www.rithmschool.com/blog")
print(response.text)
soup = BeautifulSoup(response.text, "html.parser")
articles = soup.find_all("article")

with open("blog_data.csv", "w") as csv_file:
    csv_writer = writer(csv_file)
    csv_writer.writerow(["Title", "Link", "Date"])

    for article in articles:
        anchors = article.find("a")
        # find article titles
        title = anchors.get_text()
        # find links
        url = anchors["href"]
        # find dates
        date = article.find("time")["datetime"]
        csv_writer.writerow([title, url, date])
