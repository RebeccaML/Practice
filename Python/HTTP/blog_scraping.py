# Exercise from https://www.udemy.com/the-modern-python3-bootcamp/

import requests
from bs4 import BeautifulSoup
from csv import writer

with open("blog_data.csv", "w") as csv_file:
    csv_writer = writer(csv_file)
    csv_writer.writerow(["Title", "Link", "Date"])
    page = 1

    while True:
        response = requests.get(
            "https://www.rithmschool.com/blog?page=" + str(page))
        print(response.text)
        soup = BeautifulSoup(response.text, "html.parser")
        articles = soup.find_all("article")
        if articles:
            for article in articles:
                anchor = article.find("a")
                # find article titles
                title = anchor.get_text()
                # find links
                url = anchor["href"]
                # find dates
                date = article.find("time")["datetime"]
                csv_writer.writerow([title, url, date])
            page += 1
        else:
            break
