import sqlite3

conn = sqlite3.connect("my_friends.db")

c = conn.cursor()
c.execute("SELECT * FROM friends WHERE closeness > 5 ORDER BY closeness")
# for result in c:
#     print(result)
# print(c.fetchone())
print(c.fetchall())
conn.commit()
conn.close()