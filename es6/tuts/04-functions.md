# ES6-Functions

## Default func
* Example 1
```
function add(a, b=1) {
    return a+b;
}
console.log(add(4));
<!-- 5 -->
```
* Example 2
```
function add(a,b = 1) {
    return a + b;
}
console.log(add(4,2))
<!-- 6 -->
```

## Rest Parameters
* Example
```
function fun1(...params) {
    console.log(params.length)
};
fun1();
fun1(5);
fun1(5,6,7);
<!-- 
0
1
2
-->
```