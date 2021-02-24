/**
 * @file URLSearchParams
 */

// 1. new URLSearchParams
const paramsObj1 = new URLSearchParams();

const paramsObj2 = new URLSearchParams('?user=abc&query=xyz');

const paramsObj3 = new URLSearchParams({
    user: 'lily',
    query: ['first', 'second']
});

// param need to be a iterable obj, likes Array and Set
const paramsObj4 = new URLSearchParams([
  ['user', 'abc'],
  ['query', 'first'],
  ['query', 'second']
]);

// 2. methods

//2.1 set get append delete getAll has
paramsObj4.set('query', '123'); // overwrite the query key
console.log(paramsObj4); // URLSearchParams { 'user' => 'abc', 'query' => '123' }

console.log(paramsObj4.get('user')); //adc

paramsObj4.append('user', '134'); // dublicate keys
console.log(paramsObj4); //URLSearchParams { 'user' => 'abc', 'query' => '123', 'user' => '134' }

console.log(paramsObj4.get('user')); // abc
console.log(paramsObj4.getAll('user')); // [ 'abc', '134' ]

paramsObj4.delete('user');
console.log(paramsObj4); //URLSearchParams { 'query' => '123' }

console.log(paramsObj4.has('user')); //false

//2.2 iterable methods: keys() values() enteries()

console.log(paramsObj3.keys()); // URLSearchParams Iterator { 'user', 'query' }
console.log(paramsObj3.values()); // URLSearchParams Iterator { 'lily', 'first,second' }
console.log(paramsObj3.entries()); // URLSearchParams Iterator { [ 'user', 'lily' ], [ 'query', 'first,second' ] }

paramsObj3.forEach(function(value, name, searchParams){
    console.log('value: ' + value); // value: first,second
    console.log('name: ' + name); // name: query
    console.log('searchPrams: ' + searchParams); // searchPrams: user=lily&query=first%2Csecond
}, null);

// sort()  tostring()
paramsObj3.append('a', 'kk');
console.log(paramsObj3.toString()); // user=lily&query=first%2Csecond&a=kk
paramsObj3.sort();
console.log(paramsObj3.toString()); // a=kk&query=first%2Csecond&user=lily

