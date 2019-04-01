## CDC
| Change data capture

### Config
* Edit file **/etc/mysql/my.conf**
```
[mysqld]
server_id=1
log-bin=master
binlog_format=row
```

## Ref
* https://dzone.com/articles/mysql-cdc-streaming-binary-logs-and-asynchronous-t
* http://maxwells-daemon.io/config/