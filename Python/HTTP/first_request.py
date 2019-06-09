# Learning how to do HTTP requests in Python

import requests

url = "http://www.icanhazdadjoke.com"
response = requests.get(url, headers={"Accept": "application/json"})

print(f"Your request to {url} came back with status code {response.status_code}")
data = response.json() # stores the json as a dictionarylist of dictionaries

print(data["joke"])