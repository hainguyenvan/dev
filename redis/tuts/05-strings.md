# Redis - Strings
* set key value - command xét value of key
* get key - get value of a key
* getrange key start end - lấy về một substring được lưu trong  key
* getset key value - lấy về giá trị cũ trước khi xét giá trị mới
* mget - lấy về giá trị cuả một list các keys
* settex key seconds value - xét value và thời gian tồn tại của value
* setnx key value - xét value, nếu key đã tồn tại
* strlen key - trả về length value của key
* mset key value [key value ...] - set multiple keys to multiple values, nếu key chưa tồn tại sẽ được tạo.
* msetnx key value [key value ...] - set multiple keys to multiple values, tất cả các key đều phải tồn tại.
* psettex key milliseconds value -  xét value và thời gian hết hạn được tính bằng milliseconds
* append key value - thêm value vào cuối