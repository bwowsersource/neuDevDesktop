
const newTTYSession = require('./tty');
const WebSocket = require('ws');
const { WebSocketServer } = WebSocket;
const wss = new WebSocketServer({ port: 8080 });


wss.on('connection', function connection(ws) {
    const { stdin, close } = newTTYSession((data) => {
        // process.stdout.write(data);
        console.log('cmd-result %s', data);
        ws.send(data);
    })
    ws.on('message', function message(data) {
        console.log('cmd %s', data);
        stdin(data)
        stdin('\r');
    });
    ws.on('close', () => {
        console.log('disconÎnected');
        close();
    });
    ws.send('something');
});


// ptyProcess.write('ls\r');
// ptyProcess.resize(100, 40);
// ptyProcess.write('ls\r');