use serde_json::{json, Value};
use vercel_runtime::{run, Body, Error, Request, Response, StatusCode};

#[tokio::main]
async fn main() -> Result<(), Error> {
    run(handler).await
}

pub async fn handler(req: Request) -> Result<Response<Body>, Error> {
    let body = req.body();
    let body_str = String::from_utf8(body.to_vec()).unwrap();

    // JSONとしてパース
    let json_body: Value = serde_json::from_str(&body_str).unwrap();

    println!("body: {}", json_body.to_string());

    // key1とkey2を取り出す
    let key1 = json_body["key1"].as_str().unwrap_or("N/A");
    let key2 = json_body["key2"].as_str().unwrap_or("N/A");

    // 配列の要素を取り出す
    let key_array = json_body["key_array"]
        .as_array()
        .expect("key_array is not an array");

    println!("key1: {}", key1);
    println!("key2: {}", key2);
    println!("key_array: {:?}", key_array);

    Ok(Response::builder()
        .status(StatusCode::OK)
        .header("Content-Type", "application/json")
        .body(
            json!({
                "message": "Hello from Rust!",
                "key1": key1,
                "key2": key2,
                "key_array": key_array,
            })
            .to_string()
            .into(),
        )?)
}
