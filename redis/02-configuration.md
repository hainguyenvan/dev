# Redis-Configuration
## Syntax
* Following is the basic syntax of Redis CONFIG command
```
redis 127.0.0.1:6379> CONFIG GET CONFIG_SETTING_NAME
```

## Example
* Following commands
```
redis 127.0.0.1:6379> config get loglevel
1) "loglevel"
2) "notice"
```

## Get all configuration strings
* Following commands
```
redis 127.0.0.1:6379> config get *
```

## Edit configuration
* Following is the basic syntax of config set command
```
redis 127.0.0.1:6379> config set CONFIG_SETTING_NAME NEW_CONFIG_VALUE
```