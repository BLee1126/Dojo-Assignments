#1
def countdown(num_max):
    arr = []
    for num in range(num_max, -1, -1):
        arr.append(num)
    return arr
print(countdown(5))

#2
def print_return(num1, num2):
    print(num1)
    return num2
print(print_return(1,2))

#3
def sum_first(arr):
    return arr[0]+len(arr)
print(sum_first([1,2,3,4,5]))

#4
def values_greater_than_second(arr):
    count = 0
    arrnew = []
    if len(arr) >= 2:
        for num in arr:
            if num > arr[1]:
                count += 1
                arrnew.append(num)
    elif len(arr) < 2:
        return False
    print(count)
    return arrnew
print(values_greater_than_second([5,2,3,2,1,4])) #should print 3 and return [5,3,4]
print(values_greater_than_second([3]) )#should return False

def length_and_value(size, value):
    arr = []
    for num in range(size):
        arr.append(value)
    return arr
print(length_and_value(4,7)) #[7,7,7,7]
print(length_and_value(6,2)) #should return [2,2,2,2,2,2]
