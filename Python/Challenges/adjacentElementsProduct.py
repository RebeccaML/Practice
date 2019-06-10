# Given an array of integers, find the pair of adjacent elements that
# had the largest product and return that product
# Challenge from CodeSignal.com
input = [3, 6, -2, -5, 7, 3]

def adjacentElementsProduct(inputArray):
    products = []
    length = len(inputArray)
    
    for i in range(0, length-1):
        products.append(inputArray[i]*inputArray[i+1])
    return max(products)
        
print(adjacentElementsProduct(input))