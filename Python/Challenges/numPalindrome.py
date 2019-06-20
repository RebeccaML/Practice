# Finding if a number is a palindrome without changing to a string first
# Challenge I've come across a few times now

def is_palindrome(num):
	original = num
	reverse = 0
	while num > 0:
		reverse = (10 * reverse) + num % 10
		num //= 10
	return original == reverse