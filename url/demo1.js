/**
 *  @file origin api, was abandened
 */

const url = require('url');

// 1. url string to url obj
const urlObj = url.parse('http://user:123456@sub.host.com:8080/p/home/hh?query=123#hash');

// 2. get/set/del properties of urlObj
console.log(urlObj);
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:123456',
  host: 'sub.host.com:8080',
  port: '8080',
  hostname: 'sub.host.com',
  hash: '#hash',
  search: '?query=123',
  query: 'query=123',
  pathname: '/p/home/hh',
  path: '/p/home/hh?query=123',
  href: 'http://user:123456@sub.host.com:8080/p/home/hh?query=123#hash'
}
**/
urlObj.protocol = 'https:';
console.log(urlObj.protocol)
console.log(urlObj.auth)
delete urlObj.query
console.log(urlObj.query) //undefined

// 3. resolve(base, href)
console.log(url.resolve('http://www.baidu.com/cd', 'abc')); // http://www.baidu.com/abc

// 4. format(urlObj) url obj to url string
console.log(url.format(urlObj)) //https://user:123456@sub.host.com:8080/p/home/hh?query=123#hash