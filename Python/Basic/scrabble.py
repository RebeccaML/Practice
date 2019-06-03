# Eighth project for Learn Python 3 from Codecademy
# Make a scoring system for a scrabble game using from the following two lists

letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
           "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1,
          3, 4, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]

# Convert the lists into a dictionary
letters_to_points = {key: value for key, value in zip(letters, points)}

# Add a blank space key-value pair
letters_to_points[" "] = 0

# This takes in a word and calculates how many points it is worth


def score_word(word):
    point_total = 0
    for letter in word:
        point_total += letters_to_points.get(letter, 0)
    return point_total


# Dictionary with keys being players and their values being lists of the words they've played
player_to_words = {"player1": ["BLUE", "TENNIS", "EXIT"],
                   "wordNerd": ["EARTH", "EYES", "MACHINE"],
                   "Lexi Con": ["ERASER", "BELLY", "HUSKY"],
                   "Prof Reader": ["ZAP", "COMA", "PERIOD"]}

# Dictionary that will hold the final scores
player_to_points = {}

# Iterate over the players and their word lists
# Set a variable, player_points, to equal zero here as it needs to be reset for each player
# For each word in that player's word list, get the score using the score_word function
# Add that score to the player_points variable
# Add the player's name as a key and their total points as the value in the player_to_points dictionary
for player, words in player_to_words.items():
    player_points = 0
    for word in words:
        player_points += score_word(word)
    player_to_points[player] = player_points

# Print the final scores
print(player_to_points)

# Planning to come back and do this:
# If you want extended practice, try to implement some of these ideas with the Python you’ve learned:
# play_word() — a function that would take in a player and a word, and add that word to the list of words they’ve played
# update_point_totals() — turn your nested loops into a function that you can call any time a word is played
# make your letter_to_points dictionary able to handle lowercase inputs as well
