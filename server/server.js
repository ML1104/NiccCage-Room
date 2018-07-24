const ws = require('ws');

const server = new ws.Server({ port: 8080 });

server.on('connection', function(client) {
    console.log('User is here');

    client.on('close', function(ws) {
        console.log('User has left');
    })

    client.on('message', function incoming(data) {
        server.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === ws.OPEN) {
              client.send(data);
            }
        });
    })
})
