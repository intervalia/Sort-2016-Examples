#!/usr/bin/env node
/* jslint esversion: 6 */
const ask = require('node-ask').ask;
const {prompt, confirm, multiline} = require('node-ask');

console.log(prompt);

var questions = [
  { key: 'name',   msg: 'What is your name? ',       fn: 'prompt' },
  { key: 'living', msg: 'Are you living? ',          fn: 'confirm' },
  { key: 'age',    msg: 'How old are you? ',         fn: 'prompt' },
  { key: 'hair',   msg: 'What color is your hair? ', fn: 'prompt' },
  { key: 'big',    msg: 'Give us a description:',    fn: 'multiline' }
];

ask(questions).then(
  function(answers) {
    console.log(JSON.stringify(answers,0,2));
  }
).catch(
  function(ex) {
    console.log(ex.stack);
  }
);
