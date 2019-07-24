# Overview

- Django hiện mới support các csdl có quan hệ, nosql thì mới chỉ có mongodb
- Django sử dụng design pattern MVT (model-view-template)
  - model: sẽ tương tác với db
  - view: sẽ nhận request từ client và xử lý request và render ra các template tương ứng

# ENV

- Step installs

```
1. Python 2.6.x or hight
2. Install django
```

- Install django
  - Download urls: https://www.djangoproject.com/download/
  - Run commands
  ```
  $ tar xzvf Django-x.xx.tar.gz
  $ cd Django-x.xx
  $ sudo python setup.py install
  ```

## Ref

- https://www.tutorialspoint.com/django/django_environment.htm

# Create Project

- Run commands

```
$ django-admin startproject myproject
$ python manage.py runserver
```

- Structs of project
  - File manage.py chứa command của project
  - Subfolder myproject sẽ chứa code của ứng dụng, file settings.py sẽ chứa các cấu hình của hệ thống

## Ref

- https://www.tutorialspoint.com/django/django_creating_project.htm

# Create app

- Run commands

```
$ python manage.py startapp myapp
```

- Register app in file settings.py

```
INSTALLED_APPS = (
   'django.contrib.admin',
   'django.contrib.auth',
   'django.contrib.contenttypes',
   'django.contrib.sessions',
   'django.contrib.messages',
   'django.contrib.staticfiles',
   'myapp',
)
```

## Ref

- https://www.tutorialspoint.com/django/django_apps_life_cycle.htm

# Admin Interface

- Django hỗ trợ chúng ta một giao diện admin mặc định

# Create model

- Run commands

```
$ python manage.py makemigrations
$ python manage.py migrate
```

## Ref

- https://www.tutorialspoint.com/django/django_admin_interface.htm
