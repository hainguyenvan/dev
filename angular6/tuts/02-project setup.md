# Project Setup
* Create project
```
$ ng new Angular6App
```
* Run project
```
$ ng serve
# open default port 4200
```

# Folder structure
## root folder
* e2e - folder vụ cho việc test
* node_modules - thư mục chứ các package lib của nodejs
* src -  thư mục chứa code
* angular-cli.json - chứa project name, version của cli, etc
* editorconfig - file config cho editor
* karma.conf.js - file phục vụ cho việc test
* package.json - file chứa các lib của project
* protractor.conf.js - file cấu hình phục vụ cho việc test
* tsconfig.json - file chứa các cấu hình trong quá trình biên dịch trường chình
* tslint.json

## app
* app.module.ts - là file tham chiếu đến các lib dùng trong project
    * declarations - khai báo các components của project
    * imports - khai báo sử dụng các thư viện trong project
    * providers - khai báo việc sử dụng services
    * bootstrap - tham chiếu đến default component created
* app.component.css - file chứa css của dự án
* app.component.html - file chứa code html
* app.component.spec.ts - là file tự động được tạo, chứa code để test
* app.component.ts - là file định nghĩa processing html file

## assets
* folder - chứa images, js

## environment
* thư mục chứa file cấu hình môi trường, nó gồm 2 file
    * environment.prod.ts
    * environment.ts

## index.html
* File contents
```
<!doctype html>
<html lang = "en">
   <head>
      <meta charset = "utf-8">
      <title>HTTP Search Param</title>
      <base href = "/">
      <link href = "https://fonts.googleapis.com/icon?family=Material+Icons" rel = "stylesheet">
      <link href = "https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono" rel = "stylesheet">
      <link href = "styles.c7c7b8bf22964ff954d3.bundle.css" rel = "stylesheet">
      <meta name = "viewport" content = "width = device-width, initial-scale = 1">
      <link rel = "icon" type = "image/x-icon" href = "favicon.ico">
   </head>
   <body>
      <app-root></app-root>
   </body>
</html>
```
* <app-root></app-root> - sẽ lựa chọn và hiển thị html của app.component.html

## main.ts
* Nó là file để start cho project