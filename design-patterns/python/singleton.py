#!/usr/bin/python
class Singleton:
    __instance = None

    def __init__(self):
        if Singleton.__instance != None:
            print "This class is a singleton !"
        else:
            Singleton.__instance = self

    @staticmethod
    def getIntance():
        if Singleton.__instance == None:
            Singleton()
        return Singleton.__instance

s1 = Singleton()
print "s1: ", s1

s2 = Singleton()
print "s2: ", s2