# Overview
* Firebase hỗ trợ lưu trữ kiểu json, mỗi khi dữ liệu thay đổi tất các client connect vào sẽ được cập nhật
* Chúng ta có thể authentication với username/password với firebase.

# Event Types
### value
* event này sẽ lắng nghe tất cả các thay đổi data
* interface
```
function(data)
# tất các dữ liệu
```

### child_added
* event này sẽ lắng nghe khi có một datamới được thêm vào
* interface
```
function(data, prevChildKey)
# dữ liệu đã được thêm vào
```

### child_changed
* event này sẽ lắng nghe khi cập nhật data
* interface
```
function(data)
# dữ liệu được cập nhật
```

### child_removed
* event này sẽ lắng nghe sự kiện khi xóa data
* interface
```
function(data)
# dữ liệu đã xóa
```


# Ref
* https://www.tutorialspoint.com/firebase/firebase_write_data.htm