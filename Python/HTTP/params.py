# Learning how to do HTTP requests in Python

import requests

url = "http://www.icanhazdadjoke.com/search"
response = requests.get(
    url,
    headers={"Accept": "application/json"}, 
    params={"term": "cat",
            "limit": 1}
)

print(f"Your request to {url} came back with status code {response.status_code}")
data = response.json() # stores the json as a list of dictionaries

print(data["results"])