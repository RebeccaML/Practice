# Exercise from https://www.udemy.com/the-modern-python3-bootcamp/

import re
text = "Last night Mrs. Daisy and Mr. White murdered Ms. Chow"

pattern = re.compile(r"(Mr\.|Mrs\.|Ms\.) [a-z]+", re.I)
result = pattern.sub("\g<1>REDACTED", text)
print(result)
