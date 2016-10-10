#!/usr/bin/env node
var clc = require('cli-color');

console.log('process.cwd():', clc.yellowBright(process.cwd()));
console.log('    __dirname:', clc.yellowBright(__dirname));
