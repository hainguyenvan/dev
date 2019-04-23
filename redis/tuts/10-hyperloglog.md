# Redis - HyperLogLog
* Sử dụng để log hệ thống, nói cách khác là dùng để tracking hệ thống

## examples
```
redis 127.0.0.1:6379> PFADD crawled:1 "redis"  
1) (integer) 1  
redis 127.0.0.1:6379> PFADD crawled:1 "mongodb"  
1) (integer) 1  
redis 127.0.0.1:6379> PFADD crawled:2 "mysql"  
1) (integer) 1  
redis 127.0.0.1:6379> PFCOUNT crawled:1  
(integer) 2
```

## redis hyperloglog
* pfadd key element [elment ...] - thêm phần tử vào hyperloglog
* pfcount key [key ...] - đếm số lượng phần tử theo
* pfmerge destkey sourcekey [sourcekey ...] - gộp các hyperloglog với nhau
