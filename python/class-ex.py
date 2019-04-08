#!/usr/bin/python
class Point:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y
    def printFunc(self): 
        print "x: ", self.x
        print "y: ", self.y


pt1 =  Point(1,1)
pt1.printFunc()
