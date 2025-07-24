# Simple Serverless Project

โปรเจค Serverless แบบง่ายเพื่อทดสอบ CI/CD

## Architecture
```
Local → GitHub → GitHub Actions → AWS
```

## Components
- **1 Lambda Function**: Hello World API
- **API Gateway**: REST endpoint
- **GitHub Actions**: Auto deploy
- **Terraform**: Infrastructure

## Cost: ~$1-2/month

## Quick Deploy
1. Push to GitHub
2. GitHub Actions auto deploy
3. Get API URL from Actions output

## API Endpoint
```
GET https://your-api-url/hello
Response: {"message": "Hello from Serverless!"}
```
