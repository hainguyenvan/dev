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

# install redis manager
* following commands
```
$ sudo snap install redis-desktop-manager
```

# ref
* https://www.tutorialspoint.com/redis/redis_overview.htm