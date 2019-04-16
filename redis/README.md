# overview
* redis lưu trữ dữ liệu trực tiếp trên in-memory, nó được sử dụng như một database, cache and message broker. Nó support các kiểu dữ liệu: strings, hashes, lists, sets, sorted sets
* advantages
    * exceptionally fast: redis rất nhanh có thể xử lý được 110000 SETs per second, 81000 GETs per second
    * supports rich data types: redis hộ trợ nhiều kiểu dữ liệu: stings, hashes, lists
    * operations are atomic:
    * multi-utility tool: redis có nhiều tools hỗ trợ và nó được sử dụng trong các case: caching, messaging-queuses,...

# install redis on ubuntu
* run commands
```
$ sudo apt-get update
$ sudo apt-get install redis-server
```
* start redis
```
$ redis-server
```
* check if redis is working
```
$ redis-cli
```

# redis configuration
* show configuration
```
$ redis-cli
$ CONFIG GET *
```
 
# redis-data types
### strings
* strings is redis are binary safe, store anything up to 512 megabytes in one string
```
set name "hainv"
get name
```
* note
    * một string có thể tối đa 512 mb

### hashes
* hash lưu trữ được 2^32 -1 field
```
hmset user:1 username tutorialspoint password
hmgetall user:1
```
* user:1 là key

### lists
* lists có thể lưu trữ được 2^32 -1 elements

### sets
* sets trong redis là collection, nó chứa một tập các phần tử mà không được phép trùng nhau

# redis-key
### del key
* delete key
```
del key
```

### dump key
* trả về  các version of value stored
```
dump key
```

### exists key
* check xem có key in redis
```
exists key
```

### expire key
* key sẽ không available trong một khoảng thời gian được set
```
expire KEY_NAME TIME_IN_SECONDS
```

### expireat key timestamp
* xét key sẽ hết hạn đến từ thời điểm được config
```
expireat KEY_NAME TIME_IN_UNIX_TIMESTAMP
```

### pexpire key miliseconds
* xét key hết hạn theo miliseconds

### pexpireat key miliseconds
* xét key bắt đầu hết hạn từ miliseconds

### keys patten
* tìm kiếm tất cả các keys mà phù hợp mới pattern

### move key db
* move key sang một database khác

### persist key
* remove key hết hạn

### pttl key
* get các key đã hết hạn theo miliseconds

### ttl key
* get các key đã hết hạn

### randomkey
* trả về random một key

### rename key newkey
* changes key sang một key mới

### renamenx key newkey
* changes key sang một key mới, nếu key không tồn tại thì sẽ tạo ra một key

### type key
* trả về kiểu dữ liệu được lưu trữ trong key


# ref
* https://www.tutorialspoint.com/redis/redis_overview.htm