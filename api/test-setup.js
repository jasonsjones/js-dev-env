
// register babel to transpile before the tests run
require('babel-register')();

// disable webpack featurs that mocha does not understand
require.extensions['.css'] = function () {}
