# PEP8
## Code Lay-out

### Indentation
* Use 4 spaces per indentation level
* Yes
```
# Aligned with opening delimiter.
foo = long_function_name(var_one, var_two,
                         var_three, var_four)

# Add 4 spaces (an extra level of indentation) to distinguish arguments from the rest.
def long_function_name(
        var_one, var_two, var_three,
        var_four):
    print(var_one)

# Hanging indents should add a level.
foo = long_function_name(
    var_one, var_two,
    var_three, var_four)
```
* No
```
# Arguments on first line forbidden when not using vertical alignment.
foo = long_function_name(var_one, var_two,
    var_three, var_four)

# Further indentation required as indentation is not distinguishable.
def long_function_name(
    var_one, var_two, var_three,
    var_four):
    print(var_one)
```
* The 4-space rule is optional for continuation lines

### Tabs or Spaces ?
* **Spaces thường được sử  dụng**
* Python 3 chỉ cho phép sử dụng spaces hoặc tabs
* Python 2 cho phép sử dụng cả spaces or tabs

### Maximum Line Length
* Maximum of 79 characters
* Maximum of 72 comment characters

### Should a Line Break Before or After a Binary Operator ?
* Không sử  dụng toán tử sau dấu ngắt dòng
```
# No: operators sit far away from their operands
income = (gross_wages +
          taxable_interest +
          (dividends - qualified_dividends) -
          ira_deduction -
          student_loan_interest)
```
* Nên sử dụng dấu ngắt dòng ở đầu dòng mới
```
# Yes: easy to match operators with operands
income = (gross_wages
          + taxable_interest
          + (dividends - qualified_dividends)
          - ira_deduction
          - student_loan_interest)
```

### Blank Lines
* Comments với two blank lines
* Examples:
```
class WithoutDocString(object):

    def __init__(self):
        pass


class WithADocString(object):

    """Summary line.

    Bla bla bla bla.
    """

    def __init__(self):
        pass
```

### Source File Encoding
* Code trong Python sử dụng UTF-8 (or ASCII trong Python 2)

### Imports
* Luôn luôn sử dụng imports với cú pháp sau
```
Yes:
import os
import sys

No:
import sys, os
```
* Nếu imports nhiều packages từ một module
```
from subprocess import Popen, PIPE
```
* Imports luôn luôn đặt lên trên đầu của file, nó sau comments và docstrings và trước biến globals và constants
* Thứ tự imports như sau:
```
1. Các thư viện chuẩn sẽ được import lên trên đầu
2. Các thư viện của bên thứ 3
3. Các modules được viết bởi app
```
* Khi imports một class từ một class chứa một module
```
from myclass import MyClass
from foo.bar.yourclass import YourClass
```

### Module Level Đunder Names
* Trước khi import nên có các docstrings
```
"""This is the example module.

This module does stuff.
"""

from __future__ import barry_as_FLUFL

__all__ = ['a', 'b', 'c']
__version__ = '0.1'
__author__ = 'Cardinal Biggles'

import os
import sys
```

### String Quotes
* Luôn sử dụng ký tự
```
'The sample ....' để định nghĩa value của một string
```

### Whitespace in Expressions and Statements
#### Pet Peeves
* Không sử dụng dấu spacres sau dấu ngoặc đơn
```
Yes: spam(ham[1], {eggs: 2})
No:  spam( ham[ 1 ], { eggs: 2 } )
```
* Between a trailing comma and a following close parenthesis
```
Yes: foo = (0,)
No:  bar = (0, )
```
* Immediately before a comma, semicolon, or colon:
```
Yes: if x == 4: print x, y; x, y = y, x
No: if x == 4 : print x , y ; x , y = y , x
```

## Naming Conventions
### Function
* Sử dụng lowercase, các words cách nhau bơi undersocres
* Examples
```
* function
* my_function
```

### Variable
* Sử dụng lowercase, các words cách nhau bởi underscores
* Examples
```
x, var, my_variable
```

### Class
* Sử dụng cú pháp camelcase
* Examples
```
Model, MyClass
```

### Method
* Sử dụng lowercase, các words cách nhau bởi underscores
* Examples
```
class_method,
method
```

### Constant
* Sử dụng uppercase, các words cách nhau bởi underscores
* Examples
```
CONSTANT, MY_CONSTANT, MY_LONG_CONSTANT
```

### Module
* Sử dụng lowercase, các từ các nhau bởi underscores
* Examples
```
module.py
my_module.py
```

### Package
* Sử dụng lowercase, các từ cách nhau bởi underscores
* Examples
```
package, mypackage
```


# Refs
* https://www.python.org/dev/peps/pep-0008/
* https://realpython.com/python-pep8/