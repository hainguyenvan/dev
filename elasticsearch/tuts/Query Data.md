# Examples
* Query with params
```
GET /bank/_search?q=*&sort=account_number:asc&pretty
```

* Query with body
```
GET /bank/_search
{
  "query": {
    "match_all": {}
  },
  "sort": [
    {
      "account_number": "desc"
    }
  ]
}
```

* Results
    * took: Thời gian tìm kiếm (tính bằng milliseconds)
    * timed_out: Thời gian bị timed out or not
    * _shards: Tìm kiếm trên các shards
    * hits: Kết quả tìm kiếm
    * hits.total: Kết quả tìm kiếm
        * hits.total.value: Số  lượng kết quả tìm kiếm
        * hits.total.relation: biểu thức tìm kiếm
    * hist.hits: Là một mảng kết quả tìm kiếm

* Mặc định sẽ trả về 10 result
* Elasticsearch hỗ trợ DSL (Domain Specifi Language)

# Ref
* https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started-search.html#getting-started-search