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

## API Output
```
StatusCode        : 200
StatusDescription : OK
Content           : {"message":"Hello from Serverless!","timestamp":"2025-07-24T07:13:32.480Z","path":"/hello","method":"GET"}
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    X-Amzn-Trace-Id: Root=1-6881dd1c-302e34a2655497622b90517a;Parent=21369ef974a6d27e;Sampled=0;Lineage=1:509e0e01:0
                    x-amzn-RequestId: e882ee85-2fd4-4170-956e-1f9...
Forms             : {}
Headers           : {[Connection, keep-alive], [X-Amzn-Trace-Id, Root=1-6881dd1c-302e34a2655497622b90517a;Parent=21369ef974a6d27e;Sampled=0;Lineage=1:509e0e01:0], [x-amzn-RequestId, e882ee85-2fd4-4170-956e-1f9a39f90c28],
                    [Access-Control-Allow-Origin, *]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 106

```
