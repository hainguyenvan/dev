# Query with match

- Search with number

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

- Search by size, from

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

- Search string containing "mill"

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

- Search string equals

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

- Search address containing "mill" and "lane"

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

- Search address containing "mill" or "lane"

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

- Lấy về tất cả các doc mà address không chứa "mill" hoặc "lane"

```
POST bank/_search
{
  "query": {
    "bool": {
      "must_not": [
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

- Lấy về tất các bản ghi mà có age 40 và state khác ID

```
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "age": 40
          }
        }
      ],
      "must_not": [
        {
          "match": {
            "sate": "ID"
          }
        }
      ]
    }
  }
}
```

- Lấy ra tất cả doc mà có 20000 <= balance <= 30000

```
GET /bank/_search
{
  "query": {
    "bool": {
      "must": { "match_all": {} },
      "filter": {
        "range": {
          "balance": {
            "gte": 20000,
            "lte": 30000
          }
        }
      }
    }
  }
}
```

# Note

- Nếu chỉ có một match thì query -> match
- Nếu có nhiều điều kiện match thì cần dùng bool
  - must: toán tử and
  - should: toán tử or
- Để có thể lọc được giá trị chúng ta sử dụng filter + range
  - lte: nhỏ hơn hoặc bằng
  - gte: lớn hơn hoặc bằng

# Group by

- Group by theo state, ở đây size là 0 để không muốn hiển thị hits và tính trung bình cộng của balance trong group

```
POST bank/_search
{
  "size": 0,
  "aggs": {
    "group_by_state": {
      "terms": {
        "field": "state.keyword"
      },
      "aggs": {
        "average_balance": {
          "avg": {
            "field": "balance"
          }
        }
      }
    }
  }
}
```

- Order by

```
POST bank/_search
{
  "size": 0,
  "aggs": {
    "group_by_state": {
      "terms": {
        "field": "state.keyword",
        "order": {
          "average_balance": "desc"
        }
      },
      "aggs": {
        "average_balance": {
          "avg": {
            "field": "balance"
          }
        }
      }
    }
  }
}
```

- Group by mutiple
  - Group by age trong khoảng 20-30,... và thông kế số giới tính trong đó

```
POST bank/_search
{
  "size": 0,
  "aggs": {
    "group_by_age": {
      "range": {
        "field": "age",
        "ranges": [
          {
            "from": 20,
            "to": 30
          },
          {
            "from": 30,
            "to": 40
          },
          {
            "from": 40,
            "to": 50
          }
        ]
      },
      "aggs": {
        "group_by_gender": {
          "terms": {
            "field": "gender.keyword"
          },
          "aggs": {
            "average_balance": {
              "avg": {
                "field": "balance"
              }
            }
          }
        }
      }
    }
  }
}
```

# Ref

- https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started-search.html#getting-started-search
