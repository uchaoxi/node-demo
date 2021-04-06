# Buffer
## 1 来源和简介
JavaScript中没有二进制数据类型。而服务端常用的文件流，使用的是二进制数据类型，所以nodejs提供了Buffer类型，用于存放二进制数据。
## 2 创建Buffer
### 2.1 Buffer.alloc(size, [fill], [encoding]) 
#### 参数
- size: integer 新buffer大小
- fill: string | Buffer | Uint8Array | integer 用来填充的值, 默认0
- encoding: string 如果fill是个string，encoding表示字符编码，默认'utf8'

#### 特点
调用 Buffer.alloc() 可能比替代的 Buffer.allocUnsafe() 慢得多，但能确保新创建的 Buffer 实例的内容永远不会包含来自先前分配的敏感数据，包括可能尚未分配给 Buffer 的数据。

#### 例子
```
const buf = Buffer.alloc(8, '123456789', 'ascii');
```
### 2.2 Buffer.allocUnsafe(size) 
#### 参数
size： 创建的buffer大小
#### 特点
创建的 Buffer 实例的底层内存是未初始化的。 新创建的 Buffer 的内容是未知的，可能包含敏感数据。
#### 例子
```
const buf = Buffer.allocUnsafe(16);
console.log(buf);
buf.fill(0);
console.log(buf);
```

### 2.3 Buffer.allocUnsafeSlow(size)  
#### 特点
- 和allocUnsafe一样，没有初始化buffer数据，所以Unsafe，但是和allocUnsafe不一样的是，不使用预分配的内部缓冲区（Pool），所以速度比不上allocUnsafe，意味着Slow。
- 当开发人员需要在内存池中保留一小块内存时，可以使用 Buffer.allocUnsafeSlow() 创建一个非内存池的 Buffer 实例并拷贝相关的比特位出来。

#### 例子
```
const buf = Buffer.allocUnsafeSlow(size)
```

### 2.4 Buffer.from() 
#### 重载
有5种参数
#### array : integer[] 
使用0-255范围内的字节数组array来分配一个新的Buffer，超出的元素会被截断（舍去小数变成整数，大于255的会被-256，小于0的会+256）
#### str : string, [encoding: string])
从一个string创建Buffer，encoding可以指定编码 
#### buffer: Buffer| Uint8Array
拷贝 buffer 的数据到新建的 Buffer 实例

#### arrayBuffer: ArrayBuffer> | SharedArrayBuffer, [byteOffset: integer], [length: integer]
byteOffset是开始拷贝的索引，length是拷贝的字节数
特点：创建 ArrayBuffer 的视图，但不会拷贝底层内存.例如，当传入 TypedArray 的 .buffer 属性的引用时，新建的 Buffer 会与 TypedArray 共享同一内存。
#### object: Object , [offsetOrEncoding], [length]
对于 valueOf() 返回值不严格等于 object 的对象，返回 Buffer.from(object.valueOf(), offsetOrEncoding, length)。
对于支持 Symbol.toPrimitive 的对象，会返回 Buffer.from(object[Symbol.toPrimitive]('string'), offsetOrEncoding)

## Buffer的其他方法
### Buffer.byteLength(string[, encoding])  
string : string | Buffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer 要计算长度的值。  
encoding string 如果 string 是字符串，则这是它的字符编码。默认值: 'utf8'。   
返回: integer, string中包含的字节数。   
注意: 当使用 encoding 进行编码时，返回字符串的字节长度。 与 String.prototype.length 不同，后者不会考虑用于将字符串转换为字节的编码。 
### Buffer.compare(buf1, buf2)
buf1 Buffer> | Uint8Array
buf2 Buffer> | Uint8Array
返回: integer, -1、 0 或 1，取决于比较的结果。 有关详细信息，参见 buf.compare()。
### Buffer.concat(list[, totalLength])
list : Buffer[] | Uint8Array[] 要合并的 Buffer 数组或 Uint8Array 数组。
totalLength : integer 合并后 list 中的 Buffer 实例的总长度。
返回: Buffer, 合并了 list 中所有 Buffer 实例的新 Buffer。
如果 list 中没有元素、或 totalLength 为 0，则返回一个长度为 0 的 Buffer。  
如果没有提供 totalLength，则通过将 list 中的 Buffer 实例的长度相加来计算得出。  
如果提供了 totalLength，则会强制转换为无符号整数。   
如果 list 中的 Buffer 合并后的总长度大于 totalLength，则结果会被截断到totalLength 的长度。   
### Buffer.isBuffer(obj)
如果 obj 是一个 Buffer，则返回 true，否则返回 false。

### Buffer.isEncoding(encoding)
如果 encoding 是支持的字符编码的名称，则返回 true，否则返回 false

### Buffer.poolSize
这是用于缓冲池的预分配的内部 Buffer 实例的大小（以字节为单位）。 该值可以修改。 默认值 8192， 8 * 1024
## Buffer与字符串转换
### 转换语法
```
// 字符串->Buffer
const buf = Buffer.from('hello world', 'utf8');
// Buffer->字符串
const str = buf.toString('utf-8');
```
### 转换支持的字符编码
Buffer与字符串之间转换时，可以指定字符编码，如果未指定字符编码，默认使用utf8.

支持的字符编码有
- utf8
- utf16le : UTF-16的小端序变体
- latin1 : ISO-8859-1
- base64
- hex
- ascii
- binary : latin1的别名
- ucs2 : utf16le的别名


## Buffer读写数据
```
b.write()
```

## Buffer实例的迭代
Buffer 实例可以使用 for..of 语法进行迭代
```
const buf = Buffer.from([1, 2, 3]);

for (const b of buf) {
  console.log(b);
}
```