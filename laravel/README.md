1. Install composer
* Run command
sudo apt-get update
sudo apt-get install curl
sudo curl -s https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
composer

* Tạo một project
composer create-project laravel/laravel hello-world

* Run project
php artisan serve

* Create migration
php artisan make:migration create_users_table

* Run migrate
php artisan migrate

* Tao models
php artisan make:model <directory_name>/<model_name>

* Create controller
php artisan make:controller CategoryController

2. Example ORM
* Accounts
-> id: auto
-> email: varchar(50)
-> name: varchar(255)
-> timeCreated: timestamp
-> timeModified: timestamp

* Post
-> id: auto
-> title: varchar(50)
-> descriptions: text
-> author: int
-> timeCreated: timestamp
-> timeModified: timestamp

* Address
-> id: auto
-> descriptions: text
-> timeCreated: timestamp
-> timeModified: timestamp

* AccountsAddress
-> id: auto
-> accountsID: int
-> addressID: int
-> timeCreated: timestamp
-> timeModified: timestamp