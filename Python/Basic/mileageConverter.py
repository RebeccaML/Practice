# Exercise from https://www.udemy.com/the-modern-python3-bootcamp/

kms = float(input("How many kilometers did you run today? "))

print("Okay, you said", kms)

miles = kms / 1.60934

print(f"You ran {round(miles, 2)} miles")