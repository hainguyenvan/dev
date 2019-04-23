# Redis - Transactions
* Redis transactions cho phép thực thi một nhóm các commands trong một step
    * Tất cả các commands trong một transactions sẽ được thực hiện một các tuần tự và độc lập.
    * Redis transaction là một atomic

## exammples
* Following example
```
redis 127.0.0.1:6379> MULTI 
OK 
redis 127.0.0.1:6379> SET tutorial redis 
QUEUED 
redis 127.0.0.1:6379> GET tutorial 
QUEUED 
redis 127.0.0.1:6379> INCR visitors 
QUEUED 
redis 127.0.0.1:6379> EXEC  
1) OK 
2) "redis" 
3) (integer) 1
```