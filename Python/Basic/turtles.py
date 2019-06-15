import turtle

# just experimenting

wn = turtle.Screen()
kevin = turtle.Turtle()
kevin.color("magenta")
steve = turtle.Turtle()
steve.color("violet")

steve.penup()
steve.forward(200)

for i in range(4):
    kevin.forward(150)
    kevin.left(90)

steve.pendown()

for i in range(8):
    steve.forward(50)
    steve.left(45)

wn.exitonclick()
