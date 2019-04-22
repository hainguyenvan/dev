# Directory structure
* The following is a majorly used project structure for a website
```
test-project
    node-modules/
    config/
        db.js // database connection and configuration
        credentials.js // passwords/api keys for external services used by your app
        config.js // other evironment variables
    models/
        users.js
        things.js
    routes/
        users.js
        things.js
    public/
        images/
        files/
    app.js
    routers.js
    package.json
```

# Naming convention guidelines for REST APIs
* The following:
```
[POST or Create](To the *collection*)
sub.domain.tld/class_name.{media_type} 

[GET or Read](of *one* thing)
sub.domain.tld/class_name/id_value.{media_type}

[PUT or Update](of *one* thing)
sub.domain.tld/class_name/id_value.{media_type}

[DELETE](of *one* thing)
sub.domain.tld/class_name/id_value.{media_type}

[GET or Search](of a *collection*, FRIENDLY URL)
sub.domain.tld/class_name.{media_type}/{var}/{value}/{more-var-value-pairs}

[GET or Search](of a *collection*, Normal URL)
sub.domain.tld/class_name.{media_type}?var=value&more-var-value-pairs
```
* ref
    * https://stackoverflow.com/questions/778203/are-there-any-naming-convention-guidelines-for-rest-apis

# Status code lists
* HTTP defines forty standard status codes that can be used to convery the results of a client`s request.
```
1xx: Informational - Thông tin giao tiếp giữa các layer protocol
2xx: Success - request thành công
3xx: Redirection - request bị từ chối, cần thực hiện thêm một số actions, mới được thực hiện tiếp.
4xx: Client Error
5xx: Server Error
```
* ref:
    * https://restfulapi.net/http-status-codes/