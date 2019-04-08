#!/usr/bin/python

# string
str = 'hello world'
print "=== data types string ==="
print "str: ", str
print "str[0]: ", str[0]
print "str[2:5]: ", str[2:5]
print "str[2:]: ", str[2:]
print "str * 2: ", str * 2 
print "=== end data types string ==="

# lists
list = ['absd', 786, 'john', 70.3]
tinyLists = [123, 'test']
print "=== data types lists ==="
print "list: ", list
print "list[0]: ", list[0]
print "list[1:2]: ", list[1:2]
print "list[2:]: ", list[2:]
print "list[:1]: ", list[:1]
print "list *2: ", list *2
print "=== end data types lists ==="

# tuples
tuple = ('abc', 71, 89, 'hainv', 70.03)
tinyTuple = (123, 'john')
print "=== data types tuple ==="
print "tuple: ", tuple # tuple
print "tuple[0]: ", tuple[0] # abc
print "tuple[1:]: ", tuple[1:] # first items 71
print "tuple[1:3]: ", tuple[1:3] # items index: 1, 2
print "tuple[:1]: ", tuple[:2] # item index 0
print "==== end data types tuple ==="

# dictionary
dict = {}
dict['one'] = 'this is one'
dict[2] = 'this is two'
tinyDict = {'name': 'john', 'code': 67, 'dept': 'sales'}
print "=== data types dictionary ==="
print "dict[one]: ", dict['one']
print "dict[2]: ", dict[2]
print "tinyDict: ", tinyDict
print "tinyDict.keys(): ", tinyDict.keys()
print "tinyDict.values(): ", tinyDict.values()
print "=== end data types dictionary ==="

