#Dictionary practice

playlist = {"title": "Epic", "author": "Rebecca", "songs": [
    {"title": "Storm the Sorrow", "artist": ["Epica"], "duration": 5.2},
    {"title": "White Waters", "artist": ["Epica", "Tony Kakko"], "duration": 4.75},
    {"title": "Rule the World", "artist": ["Kamelot"], "duration": 3.68}
    ]}

total_length = 0

for song in playlist["songs"]:
    total_length += song["duration"]

print(total_length)