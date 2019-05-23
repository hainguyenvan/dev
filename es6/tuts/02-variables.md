# ES6-Variables

## Type Syntax
* ES5: sử dụng từ khóa var
* ES6: có thêm let và const

## Scope
* global: có thể  truy cập được biến từ bên ngoài
* local: phạm vi truy cập là trong func

## Example: let v/s var
* Run example with var
```
var no = 10;
var no = 20;
console.log(no);
<!-- 20 -->
```
* Run example with let
```
let no = 10;
let no = 20;
console.log(no);
<!-- error: indentifier 'no' -->
```

## The const
* const được khai báo để sử dụng định nghĩa cho một biến chỉ được phép read-only
* const không được khai báo lại
* example
```
const x = 10
x = 12
// will result in an error!
```

## es6 and variable hosting
* example variables
```
var main1 = function () {
    for (var x = 0; x < 5; x++) {
        console.log(x);
    }
    console.log('x: ', x);
    console.log('done!')
}

main1();
<!-- 
0
1
2
3
4
x: 5
done!
-->
```

```
var main2 = function () {
    var x;
    for (x = 0; x < 5; x++) {
        console.log(x);
    }
    console.log('x: ', x);
    console.log('done !');
}

main2();
<!-- 
0
1
2
3
4
x: 5
done!
-->
```