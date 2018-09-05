const { exec, execSync } = require('child_process');

function _exec(shellStr) {
    var _data = '';
    var ret = new Promise(function (res, rej) {
        console.log('exec shell ================== :: \n' + shellStr);
        const child = exec(shellStr);
        child.stdout.on('data', data => {
            _data += data;
            console.log('stdout: ' + data);
        });
        child.stderr.on('error', data => {
            console.log('stderr: ' + data);
            rej('exec shell error');
        });
        child.on('close', code => {
            console.log('closing code: ' + code);
            ret.data = _data;
            res(code);
        });
    });
    return ret;
}

module.exports = {
    exec: _exec,
    execSync
};