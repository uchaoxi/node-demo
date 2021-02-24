/**
 * encode url
 */
const url = require('url');

const urlObj = new URL('https://hello.kk.com/ll?a=b&c=1 2');
console.log(urlObj); // when new URL, space is encoded
console.log(urlObj.toString());
console.log(url.format(urlObj));
