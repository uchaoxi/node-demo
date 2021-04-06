const buf1 = Buffer.from(['abc', '1234', '我是']);
console.log(buf1); //<Buffer 00 d2 00>
const buf2 = Buffer.from([1, 257, 255, 1234]);
console.log(buf2); //<Buffer 01 01 ff d2>

