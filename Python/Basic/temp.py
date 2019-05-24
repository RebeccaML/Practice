# Practice file

def has_a_vowel(a_str):
    for letter in a_str:
        if letter in "aeiou":
            return True
    return False

print(has_a_vowel("beeswax"))