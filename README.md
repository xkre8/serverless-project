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

## Cost: ~$1/month

## Files
```
src/hello/index.js          # Lambda function
terraform/main.tf           # Infrastructure
.github/workflows/          # CI/CD workflows
├── simple-deploy.yml       # Auto deploy on push
└── simple-destroy.yml      # Manual destroy
```

## Quick Deploy
1. Push to GitHub → Auto deploy
2. ดู Actions output จะเห็น:
```
🚀 DEPLOYMENT SUCCESSFUL!
📍 API URL: https://xxx.execute-api.ap-southeast-1.amazonaws.com/prod/hello
🧪 Test your API: curl https://xxx...
📋 Response: {"message":"Hello from Serverless!","timestamp":"..."}
✅ API is working!
```

## API Response
```json
{
  "message": "Hello from Serverless!",
  "timestamp": "2025-07-24T07:13:32.480Z"
}
```

## Clean & Simple ✨
