from imutils import contours
import numpy as np
import argparse
import imutils
import cv2

print 'run ocr template match ...'

# define args
ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", required=True, help="path to input image")
ap.add_argument("-r", "--reference", required=True,  help="path to reference OCR-A image")
args = vars(ap.parse_args())
print "image: ", args["image"]
print "reference: ", args["reference"]

# define credit card type
FIRST_NUMBER = {
    "3":"American Express",
    "4":"Visa",
    "5": "MasterCard",
    "6":"Discover Card"
}

# convert image to grayscale, digits appear as white
ref = cv2.imread(args["reference"])
ref = cv2.cvtColor(ref, cv2.COLOR_BGR2GRAY)
ref = cv2.threshold(ref, 10, 255,  cv2.THRESH_BINARY_INV)[1]
cv2.imwrite("/home/user1/Project/research/ocr/ocr-a-grayscale.png", ref)

# find countours in the OCR-A image
# sort them from left to right, and initialize a dictionary to map
# digit  name to the ROI
refCnts = cv2.findContours(ref.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
refCnts = imutils.grab_contours(refCnts)
refCnts = contours.sort_contours(refCnts, method="left-to-right")[0]
digits = {}

# loop over the OCR-A reference contours
for (i, c) in enumerate(refCnts):
    # compute the bounding box for the digit, extract it, and resize
    # it to a fixed size
    (x,y,w,h) =cv2.boundingRect(c)
    roi =  ref[y:y+h, x:x+w]
    roi = cv2.resize(roi,(57,88))
    digits[i] = roi
# print "digits: ", digits

# initalize a rectangular and square
# structuring kernel
rectKernel = cv2.getStructuringElement(cv2.MORPH_RECT, (9,3))
sqKernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5,5))

# load the input image, resize it, and convert it to grayscale
image = cv2.imread(args["image"])
image = imutils.resize(image, width=300)
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
cv2.imwrite("/home/user1/Project/research/ocr/ocr-input.1.png", gray)

# apply a tophat (whitehat) morphological operator to find light
# regions againts a dark background
tophat = cv2.morphologyEx(gray, cv2.MORPH_TOPHAT, rectKernel)
cv2.imwrite("/home/user1/Project/research/ocr/ocr-input.gray.png",tophat)

# compute the Scharr gradient of the tophat image, the scale
# the rest back into the range [0,255]
gradX = cv2.Sobel(tophat, ddepth=cv2.CV_32F, dx=1, dy=0, ksize = -1)
gradX = np.absolute(gradX)
(minVal, maxVal) = (np.min(gradX), np.max(gradX))
gradX = (255 * ((gradX - minVal)/(maxVal - minVal)))
gradX = gradX.astype("uint8")
cv2.imwrite("/home/user1/Project/research/ocr/ocr-input.gray.2.png", gradX)

# apply a closing operation using the rectangular kernel to help
# coles gaps in between credit card number digits, then apply
#  Otsu`s thresholing method to bizarize the image
gradX =  cv2.morphologyEx(gradX, cv2.MORPH_CLOSE, rectKernel)
thresh =  cv2.threshold(gradX, 0, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]

# apply a second colsing operation to the binary image, again
# to help close gaps between credit card number regions
thresh = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, sqKernel)
cv2.imwrite("/home/user1/Project/research/ocr/ocr-input.gray.3.png", thresh)

# find contours in the threshold image, then initialize th
# list of digit locations
cnts = cv2.findContours( thresh.copy(), cv2.RETR_EXTERNAL,  cv2.CHAIN_APPROX_SIMPLE)
cnts = imutils.grab_contours(cnts)
locs = []

for (i, c) in enumerate(cnts):
      (x,y,w,h)=cv2.boundingRect(c)
      ar = w/float(h)
      if ar > 2.5 and ar < 4.0:
          if ( w > 40 and w <  55) and ( h > 10 and h < 20):
              locs.append((x,y,w,h))

# sort the digit locations from left-to-right, then initialize the
# list of  classified digits
locs = sorted(locs, key = lambda x:x[0])
output  = []

# loop over the 4 groupings of 4 digits
for  (i, (gX, gY, gW, gH)) in enumerate (locs):
    groupOutput = []
    group = gray[gY-5:gY+gH+5, gX-5:gX+gW+5]
    group = cv2.threshold(group, 0, 255, cv2.THRESH_BINARY|cv2.THRESH_OTSU)[1]
    
    # detect the contours of each individual digit in the group,
    # then sort the digit contours from left to right
    digitCnts = cv2.findContours(group.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    digitCnts = imutils.grab_contours(digitCnts)
    digitCnts = contours.sort_contours(digitCnts, method="left-to-right")[0]
    for c in digitCnts:
         (x,y,w,h) = cv2.boundingRect(c)
         roi = group[y:y+h, x:x + w]
         roi = cv2.resize(roi, (57, 88))

         scores = []
         for (digit, digitROI) in  digits.items():
             result =  cv2.matchTemplate(roi, digitROI, cv2.TM_CCOEFF)
             (_, score, _, _) = cv2.minMaxLoc(result)
             scores.append(score)
         groupOutput.append(str(np.argmax(scores)))
    cv2.rectangle(image, (gX - 5, gY - 5),(gX + gW + 5, gY + gH + 5), (0, 0, 255), 2)
    cv2.putText(image, "".join(groupOutput), (gX, gY - 15),cv2.FONT_HERSHEY_SIMPLEX, 0.65, (0, 0, 255), 2)
    #  update the  output digits list
    output.extend(groupOutput)

# display the output credit card information to the screen
# print "Credit Card Type: {}". format(FIRST_NUMBER[output[0]])
print "Credit Card Number: ",output
# cv2.imshow ("Image", image)
# cv2.waitKey(0)