const { EventEmitter } = require("events");

// EventEmitter原型(称为emitter)上的属性方法
console.log(EventEmitter.prototype);
/*
EventEmitter {
  _events: undefined,
  _eventsCount: 0,
  _maxListeners: undefined,
  setMaxListeners: [Function: setMaxListeners],
  getMaxListeners: [Function: getMaxListeners],
  emit: [Function: emit],
  addListener: [Function: addListener],
  on: [Function: addListener],
  prependListener: [Function: prependListener],
  once: [Function: once],
  prependOnceListener: [Function: prependOnceListener],
  removeListener: [Function: removeListener],
  off: [Function: removeListener],
  removeAllListeners: [Function: removeAllListeners],
  listeners: [Function: listeners],
  rawListeners: [Function: rawListeners],
  listenerCount: [Function: listenerCount],
  eventNames: [Function: eventNames]
}
*/

function hi(name) {
    console.log('hi, ' + name);
}
function clm() {
    console.log('吃了吗');
}
function cma() {
    console.log('出门啊');
}
// 1 增加监听器： on = addListener, prependListener, once,  prependOnceListener
// 1.1这些函数都不会检查是否重复添加，同一个函数会被添加执行多次

// eg 执行了两次
// const emitter = new EventEmitter();
// emitter.on('sayhi', hi);
// emitter.on('sayhi', hi);
// emitter.emit('sayhi', 'xiaoming');

// 1.2 prependListener， prependOnceListener会把函数放到监听器数组前面
// eg. 先输出 "吃了吗"
// const emitter = new EventEmitter();
// emitter.on('sayhi', hi);
// emitter.prependListener('sayhi', clm);
// emitter.emit('sayhi', 'xiaoming');

// 1.3 once和prependOnceListener绑定的监听器，触发一次以后就移除了，不会触发第二次
// eg 只执行一次 hi, xiaoming
// const emitter = new EventEmitter();
// emitter.once('sayhi', hi);
// emitter.emit('sayhi', 'xiaoming');
// emitter.emit('sayhi', 'xiaoming');

// 2 删除监听器： off = removeListener， removeAllListeners
// eg 吃了吗
// const emitter = new EventEmitter();
// emitter.on('sayhi', hi);
// emitter.on('sayhi', clm);
// emitter.off('sayhi', hi);
// emitter.emit('sayhi');
// // 啥也没有了
// emitter.removeAllListeners();
// emitter.emit('sayhi');

// 3 触发监听器： emit
// emit可以传递参数给回调函数
// const emitter = new EventEmitter();
// emitter.on('sayhi', hi);
// emitter.emit('sayhi', 'XX');

// 4 查看监听器、事件信息：listeners, rawListeners, listenerCount, eventNames
// 4.1 listeners\rawListeners都是返回监听器拷贝，但是格式有区别
const emitter = new EventEmitter();
emitter.on('sayhi', hi);
emitter.once('sayhi', clm);
console.log(emitter.listeners('sayhi')); //[ [Function: hi], [Function: clm] ]

console.log(emitter.rawListeners('sayhi'));
/*
[
  [Function: hi],
  [Function: bound onceWrapper] { listener: [Function: clm] }
]
*/

//4.2 listenerCount
console.log(emitter.listenerCount('sayhi')); //2

//4.3 eventNames
console.log(emitter.eventNames()); //[ 'sayhi' ]


// 5 修改、查看监听器最大个数： setMaxListeners getMaxListeners
// 默认10，如果改为 Infinity（或 0）表示不限制监听器的数量。
emitter.setMaxListeners(2);
console.log(emitter.getMaxListeners());
