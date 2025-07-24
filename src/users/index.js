exports.handler = async (event) => {
    const { httpMethod, pathParameters } = event;
    
    // Mock users data
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" }
    ];
    
    switch (httpMethod) {
        case 'GET':
            if (pathParameters && pathParameters.id) {
                // GET /users/{id}
                const user = users.find(u => u.id === parseInt(pathParameters.id));
                return {
                    statusCode: user ? 200 : 404,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify(user || { error: 'User not found' })
                };
            } else {
                // GET /users
                return {
                    statusCode: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify(users)
                };
            }
            
        case 'POST':
            // POST /users - Create user
            const newUser = JSON.parse(event.body);
            newUser.id = users.length + 1;
            users.push(newUser);
            
            return {
                statusCode: 201,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(newUser)
            };
            
        default:
            return {
                statusCode: 405,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ error: 'Method not allowed' })
            };
    }
};
