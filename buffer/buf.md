buf是Buffer的实例，buf实际上是一个Uint8Array，所以可迭代，支持扩展了数组的属性方法
```
buf[index]
for b of buf
buf.entries()
buf.keys()
buf.values()
buf.length
buf.lastIndexOf(value[, byteOffset][, encoding])
buf.indexOf(value[, byteOffset][, encoding])
buf.includes(value[, byteOffset][, encoding])
buf.fill(value[, offset[, end]][, encoding])
buf.slice([start[, end]])
buf.subarray([start[, end]])
修改新的 Buffer 切片将会修改原始 Buffer 中的内存，因为两个对象分配的内存是重叠的。


buf.toString([encoding[, start[, end]]])
buf.toJSON()
```
buf还有自己读写方法
```
buf.readBigInt64BE([offset])
buf.readBigInt64LE([offset])
buf.readBigUInt64BE([offset])
buf.readBigUInt64LE([offset])
buf.readDoubleBE([offset])
buf.readDoubleLE([offset])
buf.readFloatBE([offset])
buf.readFloatLE([offset])
buf.readInt8([offset])
buf.readInt16BE([offset])
buf.readInt16LE([offset])
buf.readInt32BE([offset])
buf.readInt32LE([offset])
buf.readIntBE(offset, byteLength)
buf.readIntLE(offset, byteLength)
buf.readUInt8([offset])
buf.readUInt16BE([offset])
buf.readUInt16LE([offset])
buf.readUInt32BE([offset])
buf.readUInt32LE([offset])
buf.readUIntBE(offset, byteLength)
buf.readUIntLE(offset, byteLength)
```
```
buf.write(string[, offset[, length]][, encoding])
buf.writeBigInt64BE(value[, offset])
buf.writeBigInt64LE(value[, offset])
buf.writeBigUInt64BE(value[, offset])
buf.writeBigUInt64LE(value[, offset])
buf.writeDoubleBE(value[, offset])
buf.writeDoubleLE(value[, offset])
buf.writeFloatBE(value[, offset])
buf.writeFloatLE(value[, offset])
buf.writeInt8(value[, offset])
buf.writeInt16BE(value[, offset])
buf.writeInt16LE(value[, offset])
buf.writeInt32BE(value[, offset])
buf.writeInt32LE(value[, offset])
buf.writeIntBE(value, offset, byteLength)
buf.writeIntLE(value, offset, byteLength)
buf.writeUInt8(value[, offset])
buf.writeUInt16BE(value[, offset])
buf.writeUInt16LE(value[, offset])
buf.writeUInt32BE(value[, offset])
buf.writeUInt32LE(value[, offset])
buf.writeUIntBE(value, offset, byteLength)
buf.writeUIntLE(value, offset, byteLength)
```

一些比较的方法
buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
buf.equals(otherBuffer)

buf.buffer
buf.byteOffset

buf.swap16()
将 buf 解析成无符号的 16 位整数的数组，并且以字节顺序原地进行交换。 如果 buf.length 不是 2 的倍数，则抛出 ERR_INVALID_BUFFER_SIZE。
buf.swap32()
将 buf 解析成无符号的 32 位整数的数组，并且以字节顺序原地进行交换。 如果 buf.length 不是 4 的倍数，则抛出 ERR_INVALID_BUFFER_SIZE
buf.swap64()
将 buf 解析成 64 位数值的数组，并且以字节顺序原地进行交换。 如果 buf.length 不是 8 的倍数，则抛出 ERR_INVALID_BUFFER_SIZE