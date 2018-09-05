const rp = require('request-promise');//需要依赖 request

//默认为get请求
/**
 *     const options = {
             method: 'POST',
             uri: 'http://api.posttestserver.com/post',
             body: {
                 some: 'payload'
             },
             json: true // Automatically stringifies the body to JSON
         }; 
         const options = {
            method: 'GET',
            uri: 'https://api.github.com/user/repos',
            qs: {
                access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically parses the JSON string in the response
        };
    返回一个promise对象
    rp(options).then(function (body) {
        // Request succeeded...
    }).catch(function (err) {
        // Request failed...
    });
 */

function http(options) {
    var { uri } = options;
    console.log('request begin uri = ', uri);
    options = Object.assign({
        method: 'GET',
    }, options);

    return rp(options).then(res => {
        console.log('request success uri = ', uri, ',res code  = ', res && res.code);
        return res;
    }, err => {
        console.error('request error uri = ', uri, ',err  = ', err);
        throw (err);
    });
}

module.exports = http;