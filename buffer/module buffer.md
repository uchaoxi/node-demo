# buffer模块API
buffer.INSPECT_MAX_BYTES
返回当调用 buf.inspect() 时将会返回的最大字节数。 这可以被用户模块重写。 有关 buf.inspect() 行为的更多详细信息，参见 util.inspect()。


buffer.kMaxLength = buffer.constants.MAX_LENGTH
分配给单个 Buffer 实例的最大内存。

buffer.transcode(source, fromEnc, toEnc)
source <Buffer> | <Uint8Array> 一个 Buffer 或 Uint8Array 实例。
fromEnc <string> 当前字符编码。
toEnc <string> 目标字符编码。
返回: <Buffer>