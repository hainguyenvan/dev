# Redis - Publish Subscribe
* Trong redis thì một client sẽ subscribe trên một channels

## examples
* open two teminal
```
redis 127.0.0.1:6379> subscribe redisChat
```
```
redis 127.0.0.1:6379> PUBLISH redisChat "Redis is a great caching technique"  
(integer) 1  
redis 127.0.0.1:6379> PUBLISH redisChat "Learn redis by tutorials point"  
(integer) 1   
1) "message" 
2) "redisChat" 
3) "Redis is a great caching technique" 
1) "message" 
2) "redisChat" 
3) "Learn redis by tutorials point"
```