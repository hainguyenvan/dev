# strings

### syntax
```
COMMAND KEY_NAME
```

### example
```
set name redis
get name redis
```

# redis strings commands
### set key value
* command sets value cho key

### get key
* command get value of key

### getrage key value
* command split string
```
set mykey "This is my test key"
getrange mykey 0 3
This
```

### getset key value
* xét giá trị mới vào key và trả về giá trị cũ

### mget key1[key2...]
* get values of tất cả các keys có trong mảng

### getbit key offset
* trả về bit value tại vị trí offset của một string

### setbit key offset value
* Sets or clear bit tại vị trí offset trong string 

### setex key seconds value
* sets value với vô hiệu hóa keys

### setnx key value
* set value với điều kiện là key đã tồn tại

### setrange key offset value

### strlen key
* lấy ra len của value of key

### mset key value [key value...]
* sets multiple keys to multiple values

