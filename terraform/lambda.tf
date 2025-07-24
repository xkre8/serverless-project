# Random suffix to avoid naming conflicts
resource "random_id" "suffix" {
  byte_length = 4
}

# IAM Role for Lambda
resource "aws_iam_role" "lambda_role" {
  name = "simple-serverless-lambda-role-${random_id.suffix.hex}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

# Hello Lambda Function
resource "aws_lambda_function" "hello" {
  filename         = "../dist/hello.zip"
  function_name    = "simple-serverless-hello-${random_id.suffix.hex}"
  role            = aws_iam_role.lambda_role.arn
  handler         = "index.handler"
  runtime         = "nodejs18.x"
  architectures   = ["arm64"]
}

# Health Check Lambda Function
resource "aws_lambda_function" "health" {
  filename         = "../dist/health.zip"
  function_name    = "simple-serverless-health-${random_id.suffix.hex}"
  role            = aws_iam_role.lambda_role.arn
  handler         = "index.handler"
  runtime         = "nodejs18.x"
  architectures   = ["arm64"]
}
