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

# ref
* https://www.tutorialspoint.com/typescript/typescript_overview.htm
* https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d