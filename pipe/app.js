#!/usr/bin/env node

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
  process.stdout.write('*'+(data.replace(/\n/g, '*\n*').slice(0,-1)));
});


// grep \" package.json | ./app.js
