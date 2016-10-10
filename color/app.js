#!/usr/bin/env node

var clc = require('cli-color');

console.log(clc.green('This is green'));
console.log(clc.red('This is red'));
console.log(clc.redBright('This is bright red'));
console.log(clc.bgRed('This is red background'));

console.log(clc.blueBright('Starting a test for'), clc.yellowBright('somefile.js'));

console.log(clc.white.underline('Something underlined'));
