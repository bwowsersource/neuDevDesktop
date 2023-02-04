
const newTTYSession = require('./tty');
const WebSocket = require('ws');
const { WebSocketServer } = WebSocket;

const port = process.argv[2] || 8080;

const wss = new WebSocketServer({ port: port });


wss.on('connection', function connection(ws) {
    // const shell = newTTYSession((data) => {
    //     // process.stdout.write(data);
    //     console.log('cmd-result %s', data);
    //     ws.send(data);
    // })
    ws.on('message', function message(data) {
        console.log('cmd %s', data);
        // shell.stdin(data)
        // shell.stdin('\r');
        ws.send('echo: ' + data);

    });
    ws.on('close', () => {
        console.log('disconÎnected');
        // shell.close();
    });
    ws.send('shell client connected');
});

console.log(99);

// ptyProcess.write('ls\r');
// ptyProcess.resize(100, 40);
// ptyProcess.write('ls\r');