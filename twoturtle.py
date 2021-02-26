import turtle 

name1 = turtle.Turtle()
name1.speed(2)
name1.shape("turtle")
name1.color("red")
name1.pensize(4)
name1.left(90)
name1.forward(100)
name1.left(90)
name1.forward(100)

name2 = turtle.Turtle()
name2.speed(2)
name2.color("blue")
name2.shape("turtle")
name2.pensize(4)
name2.forward(100)
name2.right(90)
name2.forward(100)

turtle.getscreen().exitonclick()