number = int(input("Enter the number of rows: ")) 
print()

# after taking input from user, print upper part 
# printing spaces
for i in range(1, number + 1):
    for j in range(number - i):
        print(" ", end="")
    
    # print stars
    for y in range(1, 2 * i):  
        print("*", end="")
    
    print()

# printing lower part
# printing spaces first
for i in range(number - 1, 0, -1):
    for j in range(number - i): 
        print(" ", end="")
    
    # printing stars
    for y in range(1, 2 * i): 
        print("*", end="")
    
    print()