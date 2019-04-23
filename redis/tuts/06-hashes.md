# Redis - Hashes
* hdel key field2 - xóa một hoặc nhiều fields trong hash
* hexists key field - kiểm tra xem một key có trong hash hay không
* hget key field - lấy về value của key trong hash
* hgetall key - trả về tất cả các key và value
* hkeys key - trả về tất các key của hash
* hlen key - trả về length của hash
* hmget key field1 [field2] - trả về value của field trong hash
* hmset key field1 value1 - update multiple value của field
* hset key field value - update value data, nếu field chưa có thì sẽ creat
* hsetnx key field value - xét value data, nếu field chưa tồn tại thì sẽ thoát
* hvals key - trả về  list các values