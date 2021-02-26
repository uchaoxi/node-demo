const { EventEmitter } = require("events");

// EventEmitter类的属性和方法
console.log(EventEmitter);
/*
[Function: EventEmitter] {
  once: [Function: once],
  on: [Function: on],
  EventEmitter: [Circular], （不管）
  usingDomains: false, (弃用)
  captureRejectionSymbol: Symbol(nodejs.rejection),
  captureRejections: [Getter/Setter],
  errorMonitor: Symbol(events.errorMonitor),
  defaultMaxListeners: [Getter/Setter],
  init: [Function], (不管)
  listenerCount: [Function] (弃用)
}
*/

// 内置事件newListener removeListener
// EventEmitter实例在新的监听器被添加之前，触发自身的 'newListener'事件
// 'removeListener' 事件在 listener 被移除后触发。
// before add
const emitter = new EventEmitter();
emitter.on('newListener', function() {
    console.log('before add');
})

emitter.on('hello', function(){
    console.log('hello');
})

// after remove
emitter.on('removeListener', function() {
    console.log('after remove');
})
emitter.removeAllListeners();







// defaultMaxListeners

// errorMonitor

// once on


//captureRejections captureRejectionSymbol