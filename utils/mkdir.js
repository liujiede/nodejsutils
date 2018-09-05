const fs = require('fs');
const path = require('path');
function mkdir(dir) {
    var _mkdir = function (dir, callback) {
        if (fs.existsSync(dir)) {
            callback(dir);
        } else {
            _mkdir(path.dirname(dir), function () {
                fs.mkdir(dir, callback);
            });
        }
    }
    return new Promise((resolve, reject) => {
        _mkdir(dir, _ => {
            resolve(dir);
        });
    });
}
mkdir.sync = function (dir) {
    if (fs.existsSync(dir)) {
        return true;
    }
    if (mkdir.sync(path.dirname(dir))) {
        fs.mkdirSync(dir);
        return true;
    }
};
module.exports = mkdir;