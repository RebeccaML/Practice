# Exercise from https://www.udemy.com/the-modern-python3-bootcamp/

import re


def extract_phone(input):
    phone_regex = re.compile(r"\d{3} \d{3}-\d{4}\b")
    match = phone_regex.search(input)
    if match:
        return match.group()
    else:
        return None

def extract_all_phones(input):
    phone_regex = re.compile(r"\b\d{3} \d{3}-\d{4}\b")
    match = phone_regex.findall(input)
    if match:
        return match
    else:
        return None

# print(extract_phone("my number is 836 925-9582"))
# print(extract_phone("my number is 4535 44 545-23"))
print(extract_all_phones("my number is 836 925-9582 or call me at 344 777-2374"))
print(extract_phone("my number is 4535 44 545-23"))

def is_valid_phone(input):
    phone_regex = re.compile(r"^\d{3} \d{3}-\d{4}$")
    match = phone_regex.search(input)
    if match:
        return match.group()
    else:
        return None

print(is_valid_phone("464 987-2868"))
print(is_valid_phone("457 812-9745 dfd"))
print(is_valid_phone("asd 848 111-8453 d"))
