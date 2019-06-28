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


render(random_state(15, 15))