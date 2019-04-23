# Redis-Keys
* Redis sử dụng commands để quản lý keys, following theo syntax
```
redis 127.0.0.1:6379> COMMAND KEY_NAME
```

### Redis Keys Commands
* del key
```
del key_name
```
* dump key - trả value của key sau khi dump
```
dump key_name
```
* exists key - kiểm tra key có tồn tại hay không
```
exists key_name
0: chưa tồn tại
1: đã tồn tại
```
* expire key seconds - xét thời gian tồn tại của một key (đơn vị là seconds)
* expireat key timestamp seconds - xét thời gian tồn tại của key đến thời điểm được cấu hình (đơn vị seconds)
* pexprire key miliseconds - xét thời gian hết hạn của key theo miliseconds
* pexprireat key miliseconds-timestamp - xét thời gian tồn tại cuả key đến thời điểm được cấu hình
* keys pattern - tìm kiếm các keys phù hợp với pattern
```
keys name*
```
* move key db - chuyển một key sang một database khác
* persist key - xóa những key đã hết hạn
* PTTL key - lấy về thời gian còn lại của một key, đơn vị là miliseconds
* TTL key - lấy về thời gian còn lại của một key, đơn vị là seconds
* RANDOMKEY - trả về một random key trong các key có trong redis
* RENAME key newkey - thay đổi key
* RENAMENX key newkey - thay đổi key, kiểm tra xem key new có tồn tại hay không
* TYPE key - trả về kiểu của key
