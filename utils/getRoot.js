const fs = require('fs');
const path = require('path');

module.exports = function () {
    var miniapp_root = process.cwd();

    while (miniapp_root !== "/" && !fs.existsSync(path.join(miniapp_root, "app.json"))) {
        miniapp_root = path.dirname(miniapp_root);
    }

    return miniapp_root === "/"
        ? null
        : miniapp_root;
}