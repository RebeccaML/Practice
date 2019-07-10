def binary_search(lst, term):
    lst.sort()
    if len(lst) == 0:
        return False
    middle = len(lst) // 2
    if lst[middle] == term:
        return True
    elif term < lst[middle]:
        return binary_search(lst[:middle], term)
    else:
        return binary_search(lst[middle+1:], term)


num_list = [12, 64, 23, 3, 57, 19, 1, 17, 61, 62]
print(binary_search(num_list, 23))