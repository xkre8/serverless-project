exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            message: 'Hello from Serverless!',
            timestamp: new Date().toISOString(),
            path: event.path,
            method: event.httpMethod
        })
    };
};
