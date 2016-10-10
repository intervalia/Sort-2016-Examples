#! /usr/bin/env node

var clc= require('cli-color');
var fs = require('fs');
var path = require('path');

var dataPath = path.join(__dirname, 'data');
console.log('dataPath', clc.yellowBright(dataPath), '\n\n\n');

var fileNameList = fs.readdirSync(dataPath);
fileNameList = fileNameList.map(
  function(fileName) {
    var fullFileName = path.join(dataPath, fileName);
    console.log('fullFileName', clc.yellowBright(fullFileName));
    return fullFileName;
  }
);
console.log('\n\n');


fileNameList.forEach(
  function(fileName) {
    var ext = path.extname(fileName);
    var content = fs.readFileSync(fileName, {"encoding": "utf-8"});

    if (ext === '.json') {
      // Assume JSON file
      content = JSON.parse(content);
    }
    else {
      // Assume text file
      content = {
        'title': fileName,
        'body': content.split('\n')
      };
    }

    console.log(JSON.stringify(content,0,2), '\n\n\n');
  }
);
