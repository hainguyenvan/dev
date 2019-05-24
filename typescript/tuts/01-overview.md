# Overview
* typescript là javascript, tất cả các code typescript sẽ được converted sang javascript
* typescript hỗ trợ tất cả các thư viện của javascript
* ecmascript là một chuẩn của typescript

# hello world
* Run flows
```
$ npm init
$ npm i typescript --save
```
* Cấu hình build typescript
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "tsc": "tsc" 
  },
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
$ npm install @types/express -s
```
* Compiling our first application
```
$ npm run tsc
```
* Run
```
$ npm ./build/hello-world.js
```
* Full cấu hình build
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "tsc": "tsc",
    "build": "tsc",
    "start":"npm run tsc && node build/main"
  },
```