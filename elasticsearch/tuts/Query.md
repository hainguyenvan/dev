# Query with match

* Search with number
```
POST bank/_search
{
  "query": {
    "match": {
      "account_number": 20
    }
  },
  "sort": [
    {
      "account_number": "desc"
    }
  ],
  "_source": [
    "lastname"
  ]
}
```

* Search by size, from
```
POST bank/_search
{
  "query": {
    "match_all": {}
  },
  "sort": [
    {
      "account_number": "desc"
    }
  ],
  "_source": [
    "lastname"
  ],
  "size": 3,
  "from": 5
}
```

* Search string containing  "mill"
```
POST /bank/_search
{
  "query": {
    "match": {
      "address": "mill"
    }
  }
}
```

* Search string equals
```
POST /bank/_search
{
  "query": {
    "match_phrase": {
      "address": "mill lane"
    }
  }
}
```

* Search address containing "mill" and "lane"
```
POST /bank/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "address": "mill"
          }
        },
        {
          "match": {
            "address": "lane"
          }
        }
      ]
    }
  }
}
```

* Search address containing "mill" or "lane"
```
POST /bank/_search
{
  "query": {
    "bool": {
      "shuold": [
        {
          "match": {
            "address": "mill"
          }
        },
        {
          "match": {
            "address": "lane"
          }
        }
      ]
    }
  }
}
```

# Ref
* https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started-search.html#getting-started-search