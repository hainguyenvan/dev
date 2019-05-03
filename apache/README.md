# 1. Install
* Install on Red Hat or rpm based systems
```
$ sudo yum install httpd
```

# 2. What is Vitual Host ?
* Vitual Host SAME server, chung ta có rất nhiều web site được cài đặt trên server và sử dụng Virtual Host để có thể phân biệt được các web site
* Type of Apache Virtualhost
    * Name-based Virtual Host
    * Address-based or IP based virtual host and.
## 2.1. Name-based Virtual Host
* Name based virtual hosting sử dụng cho nhiều web sites với server chỉ có một địa chỉ ip duy nhất.
* Bạn có thể cấu hình trong thư mục httpd.còn
* Apache virtual host Example:
```
NameVirtualHost *:80

<VirtualHost 192.168.0.108:80>
    ServerAdmin webmaster@example1.com
    DocumentRoot /var/www/html/example1.com      
    ServerName www.example1.com
</VirtualHost>

<VirtualHost 192.168.0.108:80>
    ServerAdmin admin@example2.com
    DocumentRoot /var/www/html/example2.com
    ServerName www.example2.com
</VirtualHost>
```
* Chúng ta có thể thêm nhiều file cấu hình, và sau đó kiểm tra syntax
```
# httpd -t
```
## 2.2. IP-based Virtual Host
* Khi server có nhiêu địa chỉ IP, thì chúng ta có thể sử dụng IP-based để cấu hình cho web sites.
* IP-based Example
```
Listen 192.168.0.100:80

<VirtualHost 192.168.10.108:80>
    ServerAdmin webmaster@example1.com
    DocumentRoot /var/www/html/example1.com      
    ServerName www.example1.com
</VirtualHost>

<VirtualHost 192.168.10.109:80>
    ServerAdmin admin@example2.com
    DocumentRoot /var/www/html/example2.com
    ServerName www.example2.com
</VirtualHost>
```

# 3. What Apache needs to Run Php File ?
* Để có thể run Php files trên Apache thì bạn cần cài đặt mod_php, nếu mod_php đã cài đặt trên server thì sẽ có file php.conf trong thư mục /etc/httpd/conf.d/. Bạn có thể check nó
```
httpd -M | grep "php5_module"
```

# 4. Php handlers in Apache
* Các modules xử lý file php in apache
    * mod_php
    * CGI
    * FastCGI
    * suPHP

# 5. How to run Ruby with Apache
* Chúng ta có thể thêm module vào Apache configuration /etc/httpd/conf.d/ruby.conf
```
LoadModule ruby_module modules/mod_ruby.so
```

# 6. How to Secure Apache Web Server
## 6.1. Hiding Apache version and OS information
* Edit config
```
vim /etc/httpd/conf/httpd.conf

ServerSignature Off
ServerTokens Prod
```
## 6.2. Disable Directory Listing
* Nếu folder của chúng ta không có index file thì apache sẽ hiển thị list các thư mục. Để có thể tắt tính năng này thì chúng ta cấu hình như sau:
```
<Directory /var/www/html>
    Options -Indexes
</Directory>
```
## 6.3. Disabling unnecessary modules
* Nó sử dụng để disable những modules không sử dụng
* Show listing các modules
```
httpd -M
```
* Chúng ta có thể cấu hình các modules cần thiết bằng cách
```
vi /etc/httpd/conf/httpd.conf
# LoadModule auth_digest_module modules/mod_auth_diges.so
```
* Restart apache
## 6.4. Restricting Access to file outside the web root directory
* Nếu chúng ta muốn ngăn chặn việc truy cập vào file ở ngoài thư mực root thì có thể cấu hình như sau:
```
<Directory/>
    Options None
    AllowOverride None
    Order deny,allow
    Deny from all
</Directory>
```
## 6.5. Using mod_evasive to rebutting the DoS attack
* Nếu như chúng ta muốn bảo vệ web server khỏi việc tấn công DoS thì chúng ta có thể sử dụng module mod_evasive, nó là một module third party để phát hiện ra Dos attack
## 6.6. Using mod_security to enhance apache security
* Module mod_security làm việc như một filewall for Apache và cho phép thống kê traffic in real time.
## 6.7. Limjiting request size
* Chúng ta có thể giới hạn body size của một request từ 0-2G (2147483647 bytes)
* Cấu hình file
```
<Directory "/var/www/html/uploads">

   LimitRequestBody 512000

</Directory>
```

# 7. Apache Log Format
* Các cấu hình cho log
    * TransferLog: Tạo file log
    * LogFormat: Định dạng hiển thị log
    * CustomLog: Tạo và định dạng một log file
* Example
```
<VirtualHost www.example.com>

  ServerAdmin webmaster@example.com

  DocumentRoot /usr/www/example/httpd/htdocs/

  ServerName www.example.com

  ServerAlias example.com www.example

  ErrorLog /usr/www/example/httpd/logs/error_log

  TransferLog/usr/www/example/httpd/logs/accesslog

  CustomLog /usr/www/example/httpd/logs/accesslog combined

</VirtualHost>
``` 

# 8. Ref
* https://www.guru99.com/apache.html