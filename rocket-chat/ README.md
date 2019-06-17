# Authentication
* API Login (POST)
```
curl -H "Content-type:application/json" \
      http://localhost:3000/api/v1/login \
      -d '{ "user": "admin", "password": "1" }'
```

* API get info of account (GET)
```
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/me
```

* API lấy ra danh sách những người dùng đang online (GET)
```
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     http://localhost:3000/api/v1/users.presence
```

* Create user (POST)
| Chỉ có admin mới được quyền tạo user
```
curl -H "X-Auth-Token: HO1YpJjA28mRxDNRnlLvgzHuyRdulIjDkCITOriZ1H0" \
     -H "X-User-Id: ScxfkCiBgc5CizSa4" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.create \
     -d '{"name": "hai nguyen van 3", "email": "hainv3@gmail.com", "password": "1", "username": "hainv3"}'
```

* Add tất cả các users vào channels
https://rocket.chat/docs/developer-guides/rest-api/channels/addall/

* Add leader cho channels
https://rocket.chat/docs/developer-guides/rest-api/channels/addleader/

* Tạo channnel

* Xóa channel

* Lấy về tất cả các file của channel

* Add một người dung vào channel

* Xóa một người dùng khỏi channel

## Ref
* https://rocket.chat/docs/developer-guides/rest-api/ 