const fs = require('fs');
const readStream = fs.createReadStream('buffer/static/secret.txt', {highWaterMark: 8});
let secret = '';
let count = 0;
readStream.on('data', (chunk) => {
    console.log(chunk instanceof Buffer);
    secret += chunk;
});
// 解决方案1， 只支持部分编码， 使用string_decoder
readStream.setEncoding('utf-8');
readStream.on('end', () => {
    console.log(secret);
});