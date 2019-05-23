# Create MYSQL Tables

## Syntax
* Syntax create MYSQL table
```
create table table_name (column_name column_type);
```
* Example
```
create table tutorial_tbl (
    id int not null auto_increment,
    name varchar(20) not null
    primary key(id)
)
```