const buf = Buffer.from([1,1,1,2,1,1]);//<Buffer 01 01 01 02 01 01>
console.log(buf);
const result = buf.readInt32BE();
console.log(result);//16843010
buf.writeInt32BE(888);
console.log(buf);//<Buffer 00 00 03 78 01 01>