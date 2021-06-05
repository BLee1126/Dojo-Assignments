num1 = 42 #variable declaration, Numbers
num2 = 2.3 #variable declaration, Numbers
boolean = True #variable declaration, Boolean
string = 'Hello World' #variable declaration, initialize Strin
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration, initialize list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable declaration, initilize dictionary
fruit = ('blueberry', 'strawberry', 'banana') #variable declaration, initilize tuple
print(type(fruit)) #log statement, access tuple value
print(pizza_toppings[1]) #log statement access list value
pizza_toppings.append('Mushrooms') #list, add value
print(person['name']) #log statement, access dictionary key => value
person['name'] = 'George' #dictionary, change value
person['eye_color'] = 'blue'#dictionary, add value
print(fruit[2])#log statement, access tuple value

if num1 > 45: #conditional if, boolean
    print("It's greater")#log statement, string
else:#conditional else
    print("It's lower")#log statement, string

if len(string) < 5:#conditional if, length check, boolean
    print("It's a short word!")#log statement, string
elif len(string) > 15:#conditional else if, length check, boolean
    print("It's a long word!")#log statement, string
else:
    print("Just right!")#log statement, string

for x in range(5):#for loop start at 0 stop at 4, increment by 1
    print(x)#log statement, number
for x in range(2,5):#for loop start at 2 stop at 4, increment by 1
    print(x)#log statement, number
for x in range(2,10,3):#for loop start at 2 stop at 9, increment by 3
    print(x)#log statement, number
x = 0 #variable declaration, number
while(x < 5):#while loop start, boolean
    print(x)#log statement, number
    x += 1 #while loop increment by 1

pizza_toppings.pop()#list delete last value
pizza_toppings.pop(1)#list delete value at index 1

print(person)#log statement, dictionary
person.pop('eye_color')#dictionary delete value for key 'eye_color'
print(person)#log statement, dictionary

for topping in pizza_toppings:#for loop start at index 0 and end at at last index, increment index by 1
    if topping == 'Pepperoni':#conditional if, boolean
        continue #for loop, continue
    print('After 1st if statement')#log statement, string
    if topping == 'Olives':#conditional if, boolean
        break#for loop, break

def print_hello_ten_times():#function, no parameter
    for num in range(10):#for loop, start at 0, end at 9
        print('Hello')#log statement, string

print_hello_ten_times()#function call, no argument

def print_hello_x_times(x):#function, x parameter
    for num in range(x):#for loop, start at x argument
        print('Hello')#log statement, string

print_hello_x_times(4)#function call, argument 4

def print_hello_x_or_ten_times(x = 10):#function, parameter 10
    for num in range(x):#for loop, start at 0, end at x-1
        print('Hello')#log statement, string

print_hello_x_or_ten_times()#function call, no argument
print_hello_x_or_ten_times(4)#function call, argument of 4


"""
Bonus section
"""

# print(num3) NameError: name <variable name> is not defined
# num3 = 72 variable declaration, number
# fruit[0] = 'cranberry' TypeError: 'tuple' object does not support item assignment
# print(person['favorite_team']) KeyError: 'favorite_team'
# print(pizza_toppings[7]) IndexError: list index out of range
#   print(boolean) IndentationError: unexpected indent
# fruit.append('raspberry') AttributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1) AttributeError: 'tuple' object has no attribute 'pop'