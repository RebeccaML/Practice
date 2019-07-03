from random import random

def dead_state(width, height):
    return [[0 for i in range(width)] for j in range(height)]

def random_state(width, height):
    state = dead_state(width, height)
    for i in range(len(state)):
        for j in range(len(state[i])):
            random_number = random()
            if random_number >= 0.5:
                state[i][j] = 1
            else:
                state[i][j] = 0
    return state

def render(state):
    print(" " + "-" * len(state[0]))
    for i in state:
        row = "|"
        for j in i:
            if j == 0:
                row += " "
            else:
                row += "#"
        row += "|"
        print(row)
    print(" " + "-" * len(state[0]))


def next_board_state(state):
    new_state = dead_state(len(state[0]), len(state))
    for i in range(len(state)):
        for j in range(len(state[i])):
            if j == 0:
                if i == 0:
                    # has 3 neighbours
                else:
                    # has 5 neighbours
render(random_state(15, 15))