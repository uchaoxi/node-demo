const fs = require('fs');
const readStream = fs.createReadStream('buffer/static/secret.txt', {highWaterMark: 8});
const secret = [];
let size = 0;

readStream.on('data', (chunk) => {
    secret.push(chunk);
    size += chunk.length;
});

readStream.on('end', () => {
    var buf = Buffer.concat(secret);
    var str = buf.toString();
    console.log(str);
});