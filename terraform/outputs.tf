# Output the API URLs
output "hello_api_url" {
  value = "https://${aws_api_gateway_rest_api.api.id}.execute-api.ap-southeast-1.amazonaws.com/prod/hello"
}

output "health_api_url" {
  value = "https://${aws_api_gateway_rest_api.api.id}.execute-api.ap-southeast-1.amazonaws.com/prod/health"
}

output "api_base_url" {
  value = "https://${aws_api_gateway_rest_api.api.id}.execute-api.ap-southeast-1.amazonaws.com/prod"
}

output "resource_suffix" {
  value = random_id.suffix.hex
}
