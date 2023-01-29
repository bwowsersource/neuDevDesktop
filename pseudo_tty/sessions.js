const newTTYSession = require('./tty');

module.exports = function connectSessions(ws, talkBackLanguage) {

    const sessions = {};
    ws.on('message', function message({ event, data: { cmd, txnType, session } }) {
        if (txnType === "init") {
            const key = String(Date.now());
            if (sessions[key]) throw new Error('Cannot create sessions in quick succession')
            console.log('received: %s', data);
            sessions[key] = newTTYSession(out => ws.send(talkBackLanguage({
                session: key, data: out
            })));
            ws.send({ session: key })
        }
        else if (txnType === "cmd" && session) {
            const key = session;
            if (!sessions[key]) ws.send({ error: "Session doesn't exist" });
            const ttyProc = sessions[key];
            ttyProc.stdin(cmd);
            console.log('received: event |', cmd);

        }
    });
}



// wss.on('connection', function connection(ws) {
//     const { stdin, close } = newTTYSession((data) => {
//         // process.stdout.write(data);
//         console.log('cmd-result %s', data);
//         ws.send(data);
//     })
//     ws.on('message', function message(data) {
//         console.log('cmd %s', data);
//         stdin(data)
//         stdin('\r');
//     });
//     ws.on('close', () => {
//         console.log('disconÎnected');
//         close();
//     });
//     ws.send('something');
// });