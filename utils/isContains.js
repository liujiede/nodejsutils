const path = require('path');

module.exports = function (parent, child) {
    let a = path.resolve(parent);
    let b = path.resolve(child);
    let rela = path.relative(a, b);
    return !!rela && !rela.match(/^\.\.\//);
}