# Third project for Learn Python 3 from Codecademy

premium_ground_shipping = 125.00

def ground_shipping(weight):
    if weight <= 2:
        return weight * 1.50 + 20.00
    elif weight <= 6:
        return weight * 3.00 + 20.00
    elif weight <= 10:
        return weight * 4.00 + 20.00
    else:
        return weight * 4.75 + 20.00

def drone_shipping(weight):
    if weight <= 2:
        return weight * 4.50
    elif weight <= 6:
        return weight * 9.00
    elif weight <= 10:
        return weight * 12.00
    else:
        return weight * 14.25

def shipping_analysis(weight):
    ground = ground_shipping(weight)
    drone = drone_shipping(weight)
    if (premium_ground_shipping < ground) and (premium_ground_shipping < drone):
        print("Premium ground shipping is the cheapest at $" +
              str(premium_ground_shipping))
    elif ground < drone:
        print("Ground shipping is the cheapest at $" + str(ground))
    elif drone < ground:
        print("Drone shipping is the cheapest at $" + str(drone))
    else:
        print("Both ground and drone shipping will cost the same at $" + str(ground))

shipping_analysis(4.8)
shipping_analysis(41.5)
