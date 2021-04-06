const buf1 = Buffer.from([1, 2, 3, 4, 5, 6, 7]);
console.log(buf1);//<Buffer 01 02 03 04 05 06 07>
const buf2 = Buffer.from('abcdefg');
console.log(buf2);//<Buffer 61 62 63 64 65 66 67>
buf1.copy(buf2, 3, 2, 5);
console.log(buf2);//<Buffer 61 62 63 03 04 05 67>