def linear(lst, string):
    for i in range(len(lst)):
        if lst[i] == string:
            return i
    return False


a_list = [5, 1, 3, 6, 7, 3, 1, 6, 7, 8, 3, 6]
print(linear(a_list, 6))