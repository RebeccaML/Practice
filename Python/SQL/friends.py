import sqlite3

conn = sqlite3.connect("my_friends.db")

c = conn.cursor()

# c.execute("CREATE TABLE friends (first_name TEXT, last_name TEXT, closeness INTEGER);")
# insert_query = '''INSERT INTO friends VALUES
#                     ('Buffy', 'Summers', 8)'''
# BAD WAY
# form_first = "Willow""
# query = f"INSERT INTO friends (first_name) VALUES ('{form_first}')"

# BETTER WAY
# form_first = "Xander"
# query = f"INSERT INTO friends (first_name) VALUES (?)"

# # The second argument is a tuple
# c.execute(query, (form_first,))

data = ("Rupert", "Giles", 6)
query = "INSERT INTO friends VALUES (?,?,?)"
c.execute(query, data)
conn.commit()
conn.close()
