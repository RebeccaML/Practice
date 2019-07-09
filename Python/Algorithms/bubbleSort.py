def bubble_sort(lst):
    swap_occurred = True
    while swap_occurred:
        swap_occurred = False
        for i in range(len(lst) - 1):
            if lst[i] > lst[i + 1]:
                temp = lst[i]
                lst[i] = lst[i + 1]
                lst[i + 1] = temp
                swap_occurred = True
    return lst


print(bubble_sort([5, 3, 1, 2, 4]))
