const os = require('os');
const pty = require('node-pty');


const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';
const defaultShellConfig = {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
}

const defaultArg = { shell, config: defaultShellConfig };
module.exports = function newSession(
    dataReader,
    { bashrc, shell, ...config } = defaultArg,
) {
    const ptyProcess = pty.spawn(shell, [], config);
    ptyProcess.onData(dataReader);
    if (bashrc) {
        ptyProcess.write('source ' + bashrc)
    }

    return {
        stdin: function writer(input) {
            if (String(input) === "\\\\end") return ptyProcess.write('\cc');//ptyProcess.kill();
            ptyProcess.write(input);
        },
        close: () => ptyProcess.kill()
    }
}