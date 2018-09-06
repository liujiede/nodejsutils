const fs = require('fs');
const path = require('path');

module.exports = function (filename) {
    var _root = process.cwd();

    while (_root !== "/" && !fs.existsSync(path.join(_root, filename))) {
        _root = path.dirname(_root);
    }

    return _root === "/"
        ? null
        : _root;
}