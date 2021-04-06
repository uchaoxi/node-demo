console.time('buf1');
const buf1 = Buffer.alloc(200, '我爱米饭', 'utf8');
console.timeEnd('buf1');
console.time('buf2');
const buf2 = Buffer.allocUnsafe(200).fill('我爱米饭', 'utf8');
console.timeEnd('buf2');