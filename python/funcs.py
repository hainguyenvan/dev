#!/usr/bin/python

def printme (str) :
    print "str: ", str
    return

def printInfo(name, age=25):
    print "name: ", name
    print "age: ", age
    return

def printVariableLength(arg1, *vartuple):
    print "arg1: ", arg1
    print "vartuple: ", vartuple
    return

print '=== example func ==='
printme('hello world')
print "example demo default funcs"
printInfo('hainv',26)
printVariableLength(30, 40, 50, 60)
print '=== end exmaple func ==='