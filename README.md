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
└── simple-destroy.yml      # Manual destroy (2 options)
```

## Quick Deploy
1. Push to GitHub → Auto deploy
2. Get API URL from Actions output

## API Response
```json
{
  "message": "Hello from Serverless!",
  "timestamp": "2025-07-24T07:13:32.480Z"
}
```

## Clean & Simple ✨

```
StatusCode        : 200
StatusDescription : OK
Content           : {"message":"Hello from Serverless!","timestamp":"2025-07-24T07:56:35.770Z"}
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    X-Amzn-Trace-Id: Root=1-6881e733-2a934d695904ddca6307cac4;Parent=07da56e4a347658e;Sampled=0;Lineage=1:9ee8b440:0
                    x-amzn-RequestId: 27cd0c11-4017-4b3f-b103-5f3...
Forms             : {}
Headers           : {[Connection, keep-alive], [X-Amzn-Trace-Id, Root=1-6881e733-2a934d695904ddca6307cac4;Parent=07da56e4a347658e;Sampled=0;Lineage=1:9ee8b440:0], [x-amzn-RequestId,
                    27cd0c11-4017-4b3f-b103-5f3abadf4cc7], [Access-Control-Allow-Origin, *]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 75
```