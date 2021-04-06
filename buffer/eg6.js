const buf1 = Buffer.from([1, 2, 3, 4]);
console.log(buf1);
const buf2 = Buffer.from('hello world');
console.log(buf2);
const buf = Buffer.concat([buf1, buf2]);
console.log(buf);