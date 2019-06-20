import sqlite3
conn = sqlite3.connect("users.db")


c = conn.cursor()
# c.execute("CREATE TABLE users (username TEXT, password TEXT);")

userinfo = [("Imoen", "ByMask72398"),
         ("Minsc", "ButtKicking"),
         ("Viconia", "KhalessNau666"), ]

# c.executemany("INSERT INTO users VALUES (?,?)", userinfo)
username = input("Please enter your username: ")
password = input("Please enter your password: ")

# BAD
# query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"

#BETTER
query = f"SELECT * FROM users WHERE username=? AND password=?"
c.execute(query,(username,password))

# c.execute(query)
result = c.fetchone()
if (result):
    print("Welcome back!")
else:
    print("Failed login.")

conn.commit()
conn.close()
