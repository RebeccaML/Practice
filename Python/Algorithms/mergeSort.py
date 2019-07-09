def merge_sort(lst):
    if len(lst) <= 1:
        return lst
    else:
        midpoint = len(lst) // 2
        left = merge_sort(lst[:midpoint])
        right = merge_sort(lst[midpoint:])
        newlist = []
        while len(left) and len(right) > 0:
            if left[0] < right[0]:
                newlist.append(left[0])
                del left[0]
            else:
                newlist.append(right[0])
                del right[0]
        newlist.extend(left)
        newlist.extend(right)
        return newlist

print(merge_sort([2, 5, 3, 8, 6, 9, 1, 4, 7]))