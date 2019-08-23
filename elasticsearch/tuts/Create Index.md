# Create Index

- API

```
http://localhost:9200/customer
```

- Body

```
PUT customer
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 1,
    "analysis": {
      "analyzer": {
        "analyzer-name": {
          "type": "custom",
          "tokenizer": "keyword",
          "filter": "lowercase"
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "age": {
        "type": "long"
      },
      "experienceInYears": {
        "type": "long"
      },
      "name": {
        "type": "text",
        "analyzer": "analyzer-name"
      }
    }
  }
}
```

# Ref

- https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html
