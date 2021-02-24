/**
 *  @file WHATWG api
 */

const url = require('url');

// 1. new URL Obj, new URL(input[, base])
const urlObj = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
console.log(urlObj);
/*
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
*/

// 2. play properties of URLObj, set/get/cannot delete
console.log(urlObj.origin); // https://sub.host.com:8080
urlObj.protocol = 'https:';
console.log(urlObj.protocol); // https:
delete urlObj.search; //no effect
console.log(urlObj.search); //?query=string
console.log(urlObj.searchParams.get('query')) //string

// 3 methods of URL Obj, toString() toJSON()
console.log(urlObj.toString()); //https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash
console.log(urlObj.toString() === urlObj.href); //true
console.log(urlObj.toJSON() === urlObj.href); //true
