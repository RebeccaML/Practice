def binary_search(lst, term):
    lst.sort()
    min = 0
    max = len(lst) - 1
    while min <= max:
        currentMiddle = (min + max) // 2
        if lst[currentMiddle] == term:
            return True
        elif term < lst[currentMiddle]:
            max = currentMiddle - 1
        else:
            min = currentMiddle + 1

    return False

num_list = [12, 64, 23, 3, 57, 19, 1, 17, 51, 62]
print(binary_search(num_list, 23))