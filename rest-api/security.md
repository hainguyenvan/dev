# API Sercurity
* Dùng rsa để tạo một api key
    * Nội dụng hash bao gồm: public key, timestamp, body
    * Server sẽ hash lại xem có đúng không
    * Dựa vào timestamp sẽ biết được api key nào đang được sử dụng nhiều

## 1. Set access control allow origin header
* Chỉ cho phép các các request được gửi từ domain http://app.com.vn

## 2. Sử dụng api key
* Tạo một cắp khóa public key và private key, public key sẽ gửi đến client để mã hóa data
* Dữ liệu mã hóa là timestamp + payload + url
* Server giải mã lấy ra timestamp và mã hóa lại và check với hash mà client gửi lên
```
const path = require('path');
const fs = require('fs');
const NodeRSA = require('node-rsa');

// open and closed keys generation method
var rsaWrapper = function (direction) {
    let key = new NodeRSA();
    // 2048 — key length, 65537 open exponent
    key.generateKeyPair(2048, 65537);
    //save keys as pem line in pkcs8
    fs.writeFileSync(path.resolve(__dirname, 'keys', direction + '.private.pem'), key.exportKey('pkcs8-private-pem'));
    fs.writeFileSync(path.resolve(__dirname, 'keys', direction + '.public.pem'), key.exportKey('pkcs8-public-pem'));
    return true;
};
```

## 3. Mã hóa dữ liệu trả về
* Sử dụng một cặp khóa public key và private key. Private key được gửi cho client để có thể giải mã được data, còn public key sẽ được server dùng để mã hóa data
