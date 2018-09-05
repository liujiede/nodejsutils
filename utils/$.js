const KEY_REG = /[^.,\[\]\'\"]+/g;
/**
 * obj 要操作的对象
 * path 属性获取规则
 * 1、"a.b.c"
 * 2、"[a][b][c]"
 * 3、"['a']['b']['c']"
 * 4、"['a','b','c']"
 * deflt 默认值
 */

function get(obj, path, deflt) {
    if (null == obj) return deflt;
    let keys = ({}).toString.call(path) === '[object Array]' ? path : path.match(KEY_REG);
    if (!keys) return deflt;
    let ret;
    for (let i = 0, j = keys.length; i < j; i++) {
        ret = obj[keys[i]];
        if (null == ret) return deflt;
        obj = ret;
    }
    return ret;
}

function set(obj, path, value) {
    let keys = ({}).toString.call(path) === '[object Array]' ? path : path.match(KEY_REG);
    if (!keys) return obj;
    let _obj = obj;
    for (let i = 0, j = keys.length; i < j; i++) {
        let temp = _obj[keys[i]];
        if (null == temp) {
            if (i + 1 == j) {
                _obj[keys[i]] = value;
                break;
            }
            _obj[keys[i]] = /\d+/.test(keys[i]) ? [] : {};
        } else if (i + 1 == j) {
            _obj[keys[i]] = value;
        }
        _obj = _obj[keys[i]];
    }
    return obj;
}

module.exports = {
    get,
    set
}