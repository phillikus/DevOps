Bulk insert:
 curl -H "Content-Type: application/json" -XPOST "localhost:9200/bank/_bulk?pretty&refresh" --data-binary "@accounts.json"

 Match-search:
 curl -XGET 'localhost:9200/bank/_search?pretty' -H 'Content-Type: application/json' -d '{
    "query": {
        "match": {
            "address": "Thornton"
        }
    }
}'

Fulltext-search:
curl -XGET 'localhost:9200/bank/_search?pretty' -H 'Content-Type: application/json' -d '{
    "query": {
        "query_string": {
            "query": "*horn*", "default_field": "address"
        }
    }
}'

