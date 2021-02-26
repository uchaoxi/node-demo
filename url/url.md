# url模块
--用于处理和解析url

[toc]

## 常用方式
```
const url = require('url');
console.log(url);
```
```
// 输出内容
{
  Url: [Function: Url],
  parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],// 太老了被弃用，找不到api
  format: [Function: urlFormat],
  URL: [class URL],
  URLSearchParams: [class URLSearchParams],
  domainToASCII: [Function: domainToASCII],
  domainToUnicode: [Function: domainToUnicode],
  pathToFileURL: [Function: pathToFileURL],
  fileURLToPath: [Function: fileURLToPath]
}
```
## 传统API（弃用）
### urlObj
访问各属性时直接urlObj.protocol即可
```
{
    auth: 'user:pass',
    hash: '#hash',
    host: 'sub.example.com:8080',
    hostname: 'user:pass',
    href: 'http://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash',
    path: '/p/a/t/h?query=string',
    pathname: '/p/a/t/h',
    port: '8080',
    protocol: 'http:',
    query: {'query': 'string'}, //key、value编码过是对象，没有编码过是'query=string' search: '?query=string',
    slashes: 'true'//当需要『//』时是true
}
```
### parse
把url字符串转成url对象
```
const myurl = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
console.loog(myurl);
```
```
// 输出内容，一个Url对象
Url {
  protocol: 'https:',
  slashes: true,
  auth: 'user:pass',
  host: 'sub.host.com:8080',
  port: '8080',
  hostname: 'sub.host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'
}
```
### reslove
把目标url和基础url合并到一起，得到一个有效链接
```
url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'
```
### format
把一个url对象转换为url字符串
```
url.format({
    protocol: 'https',
    hostname: 'example.com',
    pathname: '/some/path',
    query: {
        page: 1,
        format: 'json'
    }
});
// https://example.com/some/path?page=1&format=json
```
## whatwg
### URLObj--属性实现为setter和getter
获取、修改属性时可以直接URLObj.protocol
不能delete
```
URL {
  href: 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash',
  origin: 'https://sub.host.com:8080',
  protocol: 'https:',
  username: 'user',
  password: 'pass',
  host: 'sub.host.com:8080',
  hostname: 'sub.host.com',
  port: '8080',
  pathname: '/p/a/t/h',
  search: '?query=string',
  searchParams: URLSearchParams { 'query' => 'string' },
  hash: '#hash'
}
```
### new URL(input[, base])
如果input是相对路径，需要base，如果是绝对路径，忽略base
```
const myURL = new URL('/foo', 'https://example.org/');
// https://example.org/foo
```
```
URL===require('url').URL
```

### URLSearchParams
#### new方法
```
new URLSearchParams()
new URLSearchParams(string)
new URLSearchParams(obj)
new URLSearchParams(iterable)
```
```
const params = new URLSearchParams('user=abc&query=xyz');

const params = new URLSearchParams({
  user: 'abc',
  query: ['first', 'second']
});

const params = new URLSearchParams([
  ['user', 'abc'],
  ['query', 'first'],
  ['query', 'second']
]);

```
#### set get delete append getAll has
```
params.set('abc', 'xyz') // 如果key abc已经存在，则删除所有abc，值设为xyz
params.get('abc')
params.delete('abc')
params.append('abc', '123')// 附加新键值对，可以是重复的key

params.getAll(name) //返回所有key是name的键值对 [ '123', 'pp' ]

params.has(name) //true false
```

#### entries keys values forEach
```
console.log(params.keys())
// URLSearchParams Iterator { 'query', 'name' }

console.log(params.values())
// URLSearchParams Iterator { 'string', '123' }

console.log(params.entries())
// URLSearchParams Iterator { [ 'query', 'string' ], [ 'name', '123' ] }

params.forEach((value, name, searchParams) => {
  console.log(name, value, myURL.searchParams === searchParams);
}, thisArg)
```

#### sort 稳定排序算法对key-value对进行排序,可用来增加缓存命中
```
const params = new URLSearchParams('query[]=abc&type=search&query[]=123');
params.sort();
console.log(params.toString());
// 打印 query%5B%5D=abc&query%5B%5D=123&type=search
```

#### urlSearchParams()
urlSearchParams.entries() 的别名

#### domainToASCII(domain) domainToUnicode(domain)
返回 ASCII 序列化的 domain和 Unicode 序列化的 domain，无效域名返回空字符串
此处必须使用url.domainToASCII
```
console.log(url.domainToASCII('español.com'));
console.log(url.domainToUnicode('español.com'));
//xn--espaol-zwa.com
//español.com
```

#### fileURLToPath pathToFileURL
fileURLToPath保证百分号编码字符解码结果的正确性，同时也确保绝对路径字符串在不同平台下的有效性

```
new URL('file:///C:/path/').pathname;    // 错误: /C:/path/
fileURLToPath('file:///C:/path/');       // 正确: C:\path\ (Windows)
```
pathToFileURL可确保 path 会被解析为绝对路径，并在转换为文件 URL 时正确编码 URL 控制字符。
```
new URL('/foo#1', 'file:');         // 错误: file:///foo#1
pathToFileURL('/foo#1');            // 正确:   file:///foo%231 (POSIX)
```

#### format(URL[ ,options])
 返回WHATWG URL 对象的可自定义序列化的 URL String。
```
const myURL = new URL('https://a:b@測試?abc#foo');

console.log(myURL.href);
// 打印 https://a:b@xn--g6w251d/?abc#foo

console.log(myURL.toString());
// 打印 https://a:b@xn--g6w251d/?abc#foo

console.log(url.format(myURL, { fragment: false, unicode: true, auth: false }));
// 打印 'https://測試/?abc'
```