import turtle

B = turtle.Turtle()   
B.shape("turtle")
B.color("red")    
B.pencolor("hotpink")
B.pensize(5)
B.speed(2)

A = turtle.Turtle()   
A.shape("turtle")
A.color("blue")    
A.pencolor("green")
A.speed(2)

B.forward(80)             
B.left(120)
B.forward(80)
B.left(120)
B.forward(80)
B.left(120)               
B.right(180)              
B.forward(80)             

A.forward(50)          
A.left(90)
A.forward(50)
A.left(90)
A.forward(50)
A.left(90)
A.forward(50)
A.left(90)

turtle.getscreen().exitonclick()