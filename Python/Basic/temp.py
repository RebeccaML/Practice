# Practice file

array = [6, 2, 3, 8]

def makeArrayConsecutive2(statues):
    min_num = min(statues)
    max_num = max(statues)
    num_range = max_num - min_num + 1

    return num_range - len(statues)

print(makeArrayConsecutive2(array))