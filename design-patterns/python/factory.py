#!/usr/bin/python
class Button:
    html = ""

    def getHtml(self):
        return self.html

class Image(Button):
    html = "<img></img>"

class Input(Button):
    html = "<button></button>"

class Flash(Button):
    html = "<obj></obj>"

class ButtonFactory:
    def createButton(self, typ):
        targetClass = typ.capitalize()
        return globals()[targetClass]()

btnObj = ButtonFactory()
buttons = ['image', 'input', 'flash']

for b in  buttons:
    print "html value: ",btnObj.createButton(b).getHtml()