import sqlite3

conn = sqlite3.connect("my_friends.db")

c = conn.cursor()

people = [
    ("Malcolm", "Reynolds", 9),
    ("Zoe", "Washburne", 8),
    ("Hoban", "Washburne", 10),
    ("Inara", "Serra", 9),
    ("Jayne", "Cobb", 6),
    ("Kaylee", "Frye", 10),
    ("Simon", "Tam", 7),
    ("River", "Tam", 8),
    ("Derrial", "Book", 6)
]
# For simple inserting of data
# c.executemany("INSERT INTO friends VALUES (?,?,?)", people)

# If you need to be getting averages or different order or something
# for person in person:
#     c.execute("INSERT INTO friends VALUES (?,?,?)", person)
#     average += person[2]
# print(average/len(people))

conn.commit()
conn.close()