# 创建
## 创建的方法
Buffer.alloc(size, fill?, encoding?) 
Buffer.allocUnsafe(size)
Buffer.allocUnsafeSlow(size)
### 参数
size: Buffer的字节数， 类型integer
fill: 用来初始化填充Buffer的内容， 默认0. 类型 string | Buffer | Uint8Array | integer
encoding: 如果fill是string类型，encoding表示fill的编码， 类型string
### 返回值
Buffer的一个实例
### 三个的区别
node在创建Buffer时，如果是alloc， 会分配一个单独的内存，并且进行初始化
如果是allocUnsafe， 会在预先分配的buffer池中划分一块给创建的Buffer实例，并且不会初始化。速度比alloc快很多。
如果是allocUnsafeSlow, 会分配单独的内存，不初始化， 比allocUnsafeSlow慢
实践：使用allocUnsafe然后手动初始化，如果对速度不敏感，可以使用alloc
### eg1: alloc的用法
```
const buf = Buffer.alloc(200, '我爱米饭', 'utf8');
console.log(buf.toString());
// 我爱米饭我爱米饭我爱米饭我爱米饭我爱米饭我爱米饭我爱米饭我爱米饭我爱米饭我爱米饭我爱米饭我爱米饭我爱米饭我爱米饭我爱米饭我爱米饭我爱�
```
### eg2: 速度差距大
```
console.time('buf1');
const buf1 = Buffer.alloc(200, '我爱米饭', 'utf8');
console.timeEnd('buf1');
console.time('buf2');
const buf2 = Buffer.allocUnsafe(200).fill('我爱米饭', 'utf8');
console.timeEnd('buf2');
// buf1: 0.199ms
// buf2: 0.037ms
```
# 转换
## 从别的类型转换为Buffer
Buffer.from()
Buffer.from(array)和Buffer.from(string)也可以像Buffer.allocUnsafe()一样使用内部的Buffer池
### array -> buffer
Buffer.from(array:integer[])
### eg3
```
const buf1 = Buffer.from(['abc', '1234', '我是']);
console.log(buf1); //<Buffer 00 d2 00>
const buf2 = Buffer.from([1, 257, 255, 1234]);
console.log(buf2); //<Buffer 01 01 ff d2>
``` 
### string -> buffer
Buffer.from(string, encoding?)
### eg4
```
const buf1 = Buffer.from('hello buffer');
const buf2 = Buffer.from('我是一个人类');

console.log(buf1.toString()); //hello buffer
console.log(buf2.toString()); //我是一个人类
```

### buffer -> buffer
Buffer.from(buffer:  Buffer| Uint8Array) 拷贝 buffer 的数据到新建的 Buffer 实例。
### eg5 
```
const buf = Buffer.allocUnsafe(8).fill(1);
const buf2 = Buffer.from(buf);
buf2.fill('abc', 2, 5);
console.log(buf, buf2);// <Buffer 01 01 01 01 01 01 01 01> <Buffer 01 01 61 62 63 01 01 01>
```
### arrayBuffer -> buffer
- arrayBuffer: ArrayBuffer | SharedArrayBuffer, byteOffset?: integer, length?: integer
arrayBuffer是创建buffer用的底层对象，可以通过buffer.buffer访问。

### object -> buffer
- object, offsetOrEncoding?, length?
object支持 Symbol.toPrimitive 或 valueOf() 的对象
offsetOrEncoding <integer> | <string> 字节偏移量或字符编码。
length <integer> 长度

## Buffer转换为别的类型
### buffer -> string
buffer.toString(encoding?, start? end?)

# Buffer的连接
Buffer.concat(list, totalLength?)
list <Buffer[]> | <Uint8Array[]> 要合并的 Buffer 数组或 Uint8Array 数组。
totalLength <integer> 合并后 list 中的 Buffer 实例的总长度。
eg6
```
const buf1 = Buffer.from([1, 2, 3, 4]);
console.log(buf1);
const buf2 = Buffer.from('hello world');
console.log(buf2);
const buf = Buffer.concat([buf1, buf2]);
console.log(buf); //<Buffer 01 02 03 04 68 65 6c 6c 6f 20 77 6f 72 6c 64>
```
# Buffer的复制
buffer.copy(target, tagetStart?, sourceStart?, SourceEnd?)
- target <Buffer> | <Uint8Array> 要拷贝进的 Buffer 或 Uint8Array。
- targetStart <integer> target 中开始写入之前要跳过的字节数。默认值: 0。
- sourceStart <integer> buf 中开始拷贝的偏移量。默认值: 0。
- sourceEnd <integer> buf 中结束拷贝的偏移量（不包含）。默认值: buf.length。
- 返回: <integer> 拷贝的字节数。
## eg7 
```
const buf1 = Buffer.from([1, 2, 3, 4, 5, 6, 7]);
console.log(buf1);//<Buffer 01 02 03 04 05 06 07>
const buf2 = Buffer.from('abcdefg');
console.log(buf2);//<Buffer 61 62 63 64 65 66 67>
buf1.copy(buf2, 3, 2, 5);
console.log(buf2);//<Buffer 61 62 63 03 04 05 67>
```

# Buffer的读写
## eg8
```
const buf = Buffer.from([1,1,1,2,1,1]);//<Buffer 01 01 01 02 01 01>
console.log(buf);
const result = buf.readInt32BE();
console.log(result);//16843010
buf.writeInt32BE(888);
console.log(buf);//<Buffer 00 00 03 78 01 01>
```

