/**
 * url's methods:
 * 
 * domainToASCII
 * domainToUnicode
 * fileURLToPath
 * pathToFileURL
 * format
 */
const url = require('url');

const urlObj = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

// 4 methods of url
console.log(url.domainToASCII(urlObj.hostname)); // sub.host.com
console.log(url.domainToUnicode(urlObj.hostname)); // sub.host.com
console.log(url.domainToASCII('español.com')); // xn--espaol-zwa.com

console.log(url.fileURLToPath("file:///C:/path/").toString());// /C:/path/
console.log(url.pathToFileURL('/some/path%.c').toString(0)); //  file:///some/path%25.c  

console.log(url.format(urlObj, {
  auth: true, // default true
  fragment: false, // has hash?, default true
  search: false, // default true
  unicode: true // default false
}));