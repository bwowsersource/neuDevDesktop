import { neu } from "../libs/neu";
let childProc = null;
const wsshellSPort = 9788;

function procListener(childProc, promiseControls) {
    let procOut = "";
    const listener = (evt) => {
        console.log("message", evt);
        console.log("procId", childProc.id, evt.detail.id);
        if (childProc.id == evt.detail.id) {
            switch (evt.detail.action) {
                case "stdOut":
                    //     addLine("stdout", evt.detail.data);
                    //     console.log(evt.detail.data);
                    //     break;
                    promiseControls.resolve(procOut);
                    break;
                case "stdErr":
                    promiseControls.reject(evt.detail.data);
                    break;
                case "exit":
                    console.log(`exit`, evt.detail.data);
                    if (evt.detail.data < 1) promiseControls.resolve(procOut);
                    else promiseControls.reject(evt.detail.data);
                    neu.events.off("spawnedProcess", listener);
                    break;
            }
        }
    };

    return listener;
}


function promiseController(timeout = 6000) {
    const promiseControls = {};
    const promise = new Promise((resolve, rej) => {
        promiseControls.resolve = (val) => {
            promiseControls.decided = true;
            resolve(val);
        };
        promiseControls.reject = (val) => {
            promiseControls.decided = true;
            rej(val);
        };;
    });
    setTimeout(() => {
        if (!promiseControls.decided) promiseControls.reject("rejected due to no response")
    }, timeout)
    return { promiseControls, promise }
}

async function startServer(port) {
    const proc = await neu.os.spawnProcess('node ./pseudo_tty/index.js ' + port);
    const { promiseControls, promise } = promiseController();
    neu.events.on("spawnedProcess", procListener(proc, promiseControls));
    const handshake = await promise.catch(async (err) => {
        // make sure the procerss exits;
        await neu.os.updateSpawnedProcess(proc.id, 'exit');
        return Promise.reject(err);
    });
    if (handshake) console.log("handshake:", handshake);
    return proc;
}


async function startConnection(onclose = () => { }) {
    const webSocket = new WebSocket("ws://localhost:" + wsshellSPort);
    const { promiseControls, promise } = promiseController();

    webSocket.onopen = (event) => {
        // webSocket.send("Here's some text that the server is urgently awaiting!");
        promiseControls.resolve();
    };

    webSocket.onclose = (event) => {
        if (promiseControls.decided) onclose();
        else promiseControls.reject();
    };
    await promise;
    return webSocket;
}

export async function getSession() {

    if (!childProc) {
        childProc = await startServer(wsshellSPort);
    }
    const connection = await startConnection();
    connection.onmessage = ev => {
        console.log("ws message: ", ev);
    }

}