# Query DSL
* Match all query
```
POST /bank/_search
{
  "query": {
    "match_all": {}
  }
}
```

* Range Query
    * gte: Lớn hơn hoặc bằng
    * gt: Lớn hơn
    * lte: Nhỏ hơn hoặc bằng
    * lt: Nhỏ hơn
```
POST /bank/_search
{
  "query": {
    "range": {
      "balance": {
        "lte": 10000
      }
    }
  }
}
```

* Hợp nhiều query, sử dụng compound query với bool