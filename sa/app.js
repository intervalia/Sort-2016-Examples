#! /usr/bin/env node

var clc= require('cli-color');
var sa = require('superagent');

sa.get('localhost:8088/sort/2016/sample1.json')
  .end(
    function(err,res) {
      if (err) {
        console.log(clc.red('Error:'), clc.redBright(err));
      }
      else {
        console.log(JSON.stringify(res.body,0,2));
      }
    }
  );
