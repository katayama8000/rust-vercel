use http::{StatusCode};
use vercel_lambda::{lambda, error::VercelError, IntoResponse, Request, Response};
use std::error::Error;

fn handler(_: Request) -> Result<impl IntoResponse, VercelError> {
	let response = Response::builder()
		.status(StatusCode::OK)
		.header("Content-Type", "text/plain")
		.body("user endpoint")
		.expect("Internal Server Error");
	
		Ok(response)
}

// Start the runtime with the handler
fn main() -> Result<(), Box<dyn Error>> {
	Ok(lambda!(handler))
}