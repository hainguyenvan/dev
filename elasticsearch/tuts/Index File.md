# Index file JSON
* File json
 https://raw.githubusercontent.com/elastic/elasticsearch/master/docs/src/test/resources/accounts.json#

* Run import data
```
curl -H "Content-Type: application/json" -XPOST "localhost:9200/bank/_bulk?pretty&refresh" --data-binary "@accounts.json"
```

* Search data
```
GET
http://localhost:9200/bank/_search
```

# Ref
* https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started-index.html