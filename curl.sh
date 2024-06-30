curl -X POST https://rust-vercel-gamma.vercel.app/api/handler \
     -H "Content-Type: application/json" \
     -d '{"body": {"key1": "value1", "key2": "value2", "array": [1, 2, 3]}, "message": "Hello from Rust!"}'
