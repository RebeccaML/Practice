from random import shuffle
# Just a deck of cards at the moment but I plan on making a game from this soon
# Project from https://www.udemy.com/the-modern-python3-bootcamp/
# Written myself, to specifications provided


class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"


class Deck:
    def __init__(self):
        suits = ["Diamonds", "Hearts", "Spades", "Clubs"]
        values = ["A", "2", "3", "4", "5",
                  "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def __repr__(self):
        return f"Deck of {self.count()} cards"

    def count(self):
        return len(self.cards)

    def _deal(self, num):
        if self.count() == 0:
            raise ValueError("All cards have been dealt.")
        if num == 1:
            return self.cards.pop()
        dealt = []
        if num > self.count():
            for i in range(self.count()):
                dealt.append(self.cards.pop())
        else:
            for i in range(num):
                dealt.append(self.cards.pop())
        return dealt

    def shuffle(self):
        if self.count() != 52:
            raise ValueError("Only full decks can be shuffled.")
        else:
            shuffle(self.cards)

    def deal_card(self):
        return self._deal(1)

    def deal_hand(self, num):
        return self._deal(num)


# Tests
my_deck = Deck()
print(my_deck)
my_deck.shuffle()
card = my_deck.deal_card()
print(card)
hand = my_deck.deal_hand(5)
print(hand)
print(my_deck)

# hand = my_deck.deal_hand(50)
# print(hand)
# print(my_deck)

# hand = my_deck.deal_hand(5)
# print(hand)
# print(my_deck)
