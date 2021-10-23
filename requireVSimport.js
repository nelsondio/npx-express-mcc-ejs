//
// found inhttps://stackoverflow.com/questions/31354559/using-node-js-require-vs-es6-import-export
// === ES6 import vs ES require
// === ES6 => import, export default, export
// === CommonJS -> require, module.exports, exports.foo
//
// == ES6 export default
// hello.js
function hello() {
	return 'hello'
}
export default hello

// app.js
import hello from './hello'
hello() //return hello

//ES6 export multiple and import multiple
// == hello.js
function hello1() {
	return 'hello1'
}
function hello2() {
	return 'hello2'
}
export { hello1, hello2 } from './hello'

// == app.js
import { hello1, hello2 } from './hello'
hello1() // returns hello1
hello2() // returns hello2

// == CommonJS module.exports
// hello.js
function hello() {
	return 'hello'
}
// app.js
const hello = require('./hello')
hello()

// === CommonJS module.exports multiple
function hello1() {
	return 'hello1'
}
function hello2() {
	return 'hello2'
}
module.exports = {
	hello1,
	hello2
}
// app.js
const hello = require('./hello')
hello.hello1()  // returns hello1
hello.hello2()  // returns hello2

