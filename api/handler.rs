use serde_json::json;
use vercel_runtime::{run, Body, Error, Request, Response, StatusCode};

#[tokio::main]
async fn main() -> Result<(), Error> {
    run(handler).await
}

pub async fn handler(req: Request) -> Result<Response<Body>, Error> {
    let body = req.body();
    print!("Request body: {:?}", body);
    println!("Request headers: {:?}", req.headers());
    println!("Request method: {:?}", req.method());
    Ok(Response::builder()
        .status(StatusCode::OK)
        .header("Content-Type", "application/json")
        .body(
            json!({
                "message": "Hello from Rust!",
                "body": body,
            })
            .to_string()
            .into(),
        )?)
}
