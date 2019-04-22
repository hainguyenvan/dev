# Redis-Data Types

## Strings
* Redis hỗ trợ kiểu dữ liệu dạng string, có thể lưu trữ tối đa 512 mb
* example
```
redis 127.0.0.1:6379> set name "tutorialspoint"
OK
reds 127.0.0.1:6379> get name
```

## Hashes
* Hash là một mảng chứa dữ liệu dạng key, value, nó có thể lưu chữ được tối đa 2^32 -1 field-value

## Lists
* Lists là một danh sách dữ liệu, nó có độ dài tối đa là 2^32 -1 elements

## Sets
* Là một tập hợp các phần tử, nhưng dữ liệu của các phần tử không được trùng nhau, nó có thể lưu trữ tối đa 2^32 -1 phần tử.

## Sorted Sets
* Là một tập hợp các phần tử có thêm score để có thể order, các phần tử trong sorted sets không trùng nhau.
