# Q/A
* typescript là gì ?
* typescript khác gì với java script
* typescript vs nodejs
* typescript vs graphql
* đọc es7, es6, es5

# overview
* typescript là javascript, tất cả các code typescript sẽ được converted sang javascript
* typescript hỗ trợ tất cả các thư viện của javascript
* ecmascript là một chuẩn của typescript

# hello world
* Run flows
```
$ npm init
$ npm i typescript --save
```
* Create tsconfig.json
```
$ npm run tsc -- --init
```
* Change folder build
```
"outDir":"./build"
```
* Install lib
```
$ npm install express -s
$ npm install @type/express -s
```
* Compiling our first application
```
$ npm run tsc
```
* Run
```
$ npm ./build/hello-world.js
```

# types
### any type
* any data type: hỗ trợ tất cả các kiểu dữ liệu
### built-in type
* number: kiểu dữ liệu số
* string: kiểu dữ liệu chuỗi
* boolean: true or false
* void: sử dụng để làm kết quả trả về của một hàm
* null
* undefined
### user-defined type
* user-defined type: kiểu dữ liệu do người dùng định nghĩa

# variable scope
* global scope - là biến được khai báo ở ngoài class và bất cứ ai cũng có thể truy cập
* class scope - là biến được khai báo ở bên trong của class và được truy cập thông qua class
* local scope - là biến được khai báo ở bên trong của phương thức

# ref
* https://www.tutorialspoint.com/typescript/typescript_overview.htm
* https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d