# for loop
for x in range(100): print((x % 3 == 0) * "Fizz" + (x % 5 == 0) * "Buzz" or x)

# List comprehension
[print("Fizz"*(i%3==0)+"Buzz"*(i%5==0) or i) for i in range(101)]
