const buf = Buffer.allocUnsafe(8).fill(1);
const buf2 = Buffer.from(buf);
buf2.fill('abc', 2, 5);
console.log(buf, buf2);// <Buffer 01 01 01 01 01 01 01 01> <Buffer 01 01 61 62 63 01 01 01>