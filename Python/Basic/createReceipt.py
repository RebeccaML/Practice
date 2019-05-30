# Codecademy Learn Python 3 first project
# Verrrry simple receipt (loops, functions, lists etc weren't taught at this stage)
# Neither was rounding but I couldn't leave the answer with so many decimals


lovely_loveseat_description = "Lovely Loveseat. Tufted polyester blend on wood. 32 inches high x 40 inches deep. Red or white."
lovely_loveseat_price = 254.00
stylish_setee_description = "Stylish Setee. Faux leather on birch. 29.50 inches high x 54.75 inches wide x 28 inches deep. Black."
stylish_setee_price = 180.50
luxurious_lamp_description = "Luxurious Lamp. Glass and iron. 36 inches tall. Brown with cream shade."
luxurious_lamp_price = 52.15

sales_tax = 0.88

customer_one_total = 0
customer_one_itemization = ""

customer_one_total += lovely_loveseat_price + luxurious_lamp_price
customer_one_itemization += lovely_loveseat_description + " \n" + luxurious_lamp_description

customer_one_tax = customer_one_total * sales_tax

customer_one_total += customer_one_tax

print("Customer One Items: ")
print(customer_one_itemization)
print("Customer One Total:")
print(round(customer_one_total, 2))