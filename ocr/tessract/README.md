# Tesseract
| Tesseract làm việc với những ảnh mà có ít nhất là 300 dpi

## 1. How to install Tesseract on Ubuntu
* we will intall:
    * tesseract library (libtesseract)
    * command line Tesseract tool (tesseract-ocr)
    * python wrapper for tesseract (pytesseract)
### 1.1. Install Tesseract 4.0 on Ubunto 18.04
* run commands
```
sudo apt install tesseract-ocr
sudo apt install libtesseract-dev
sudo pip install pytesseract
```

### 1.2. Install Tesseract 4.0 on Ubuntu 14.04, 16.04, 17.04, 17.10
* run commands
```
$ sudo add-apt-repository ppa:alex-p/tesseract-ocr
$ sudo apt-get update
$ sudo apt install tesseract-ocr
$ sudo apt install libtesseract-dev
# pip install pytesseract
```

### 1.3. Install Tesseract 4.0 on macOS
* homebrew to install tesseract (default tesseract 3)
* install latest version using commands
```
brew install tesseract --HEAD
pip install pytesseract
```

### 1.4. Chekcing Tesseract version
* to check version with command line
```
tesseract --version
```
* and you will see the output similar to
```
tesseract 4.0.0-beta.1-306-g45b11
leptonica-1.76.0
libjpeg 9c : libpng 1.6.34 : libtiff 4.0.9 : zlib 1.2.8
Found AVX2
Found AVX
Found SSE
```

## 2. Tesseract Basic Usage
### options in commands line
* input filename: file ảnh cần đọc
* orc language: sử dụng để để in các tham số ra màn hình
* ORC Engine Mode (oem): sử dụng để training data
```
0    Legacy engine only.
1    Neural nets LSTM engine only.
2    Legacy + LSTM engines.
3    Default, based on what is available.
```
* Page Segmentation Mode (psm): Phân đoạn hình ảnh
```
0    Orientation and script detection (OSD) only.
1    Automatic page segmentation with OSD.
2    Automatic page segmentation, but no OSD, or OCR.
3    Fully automatic page segmentation, but no OSD. (Default)
4    Assume a single column of text of variable sizes.
5    Assume a single uniform block of vertically aligned text.
6    Assume a single uniform block of text.
7    Treat the image as a single text line.
8    Treat the image as a single word.
9    Treat the image as a single word in a circle.
10   Treat the image as a single character.
11   Sparse text. Find as much text as possible in no particular order.
12   Sparse text with OSD.
13   Raw line. Treat the image as a single text line, bypassing hacks that are Tesseract-specific.
```
### 2.1. Command Line Usage
* The examples
```
# Output to terminal
tesseract image.jpg stdout -l eng --oem 1 --psm 3
# Output to output.txt 
tesseract image.jpg output -l eng --oem 1 --psm 3
```

### 2.2. Using pyytesseract
* Code python
```
import cv2
import sys
import pytesseract
 
if __name__ == '__main__':
 
  if len(sys.argv) < 2:
    print('Usage: python ocr_simple.py image.jpg')
    sys.exit(1)
   
  # Read image path from command line
  imPath = sys.argv[1]
     
  # Uncomment the line below to provide path to tesseract manually
  # pytesseract.pytesseract.tesseract_cmd = '/usr/bin/tesseract'
 
  # Define config parameters.
  # '-l eng'  for using the English language
  # '--oem 1' for using LSTM OCR Engine
  config = ('-l eng --oem 1 --psm 3')
 
  # Read image from disk
  im = cv2.imread(imPath, cv2.IMREAD_COLOR)
 
  # Run tesseract OCR on image
  text = pytesseract.image_to_string(im, config=config)
 
  # Print recognized text
  print(text)
```
* Run commands
```
# python py-tesseract.py IMAGES_PATH
```

# Ref
* https://www.learnopencv.com/deep-learning-based-text-recognition-ocr-using-tesseract-and-opencv/