const util = require('util');
const fs = require('fs');
module.exports = {
    read: util.promisify(fs.readFile),
    write: util.promisify(fs.writeFile),
}