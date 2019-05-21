# Create and use a simpe function inclduing if/else statements
# Assignment from an edX course

max_order = 100
min_order = 1
price = 5.65
def cheese_order():
    order_amount = float(input("Enter cheese order weight (numeric value): "))
    if order_amount > max_order:
        print(str(order_amount) + " is more than currently available stock.")
    elif order_amount < min_order:
        print(str(order_amount) + " is below minimum order amount.")
    else:
        print(str(order_amount) + " costs $" + str(order_amount * price))

cheese_order()