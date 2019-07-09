def selection_sort(lst):
    for i in range(len(lst)):
        minIndex = 1
        for j in range(i + 1, len(lst)):
            if lst[j] < lst[minIndex]:
                minIndex = j
        minValue = lst[minIndex]
        del lst[minIndex]
        lst.insert(i, minValue)
    return lst

print(selection_sort([5, 3, 1, 2, 4]))