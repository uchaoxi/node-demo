// EventEmitter类, 基础使用方式：引用-新建-on-emit
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('hello', function() {
    console.log('hello, two');
});

myEmitter.emit('hello'); //hello, two


