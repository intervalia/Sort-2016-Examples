#!/usr/bin/env node
/* jslint esversion: 6 */
const nodeAsk = require('node-ask');

// nodeAsk.pprompt('What is your name? ', 'name').then(
//   function(answers) {
//     return nodeAsk.pprompt('How old are you? ', 'age', answers);
//   }
// ).then(
//   function(answers) {
//     return nodeAsk.pconfirm('Are you living? ', 'living', answers);
//   }
// ).then(
//   function(answers) {
//     return nodeAsk.pprompt('What color is your hair? ', 'hair', answers);
//   }
// ).then(
//   function(answers) {
//     return nodeAsk.pmultiline('Give us a description:', 'big', answers);
//   }
// ).then(
//   function(answers) {
//     console.log(JSON.stringify(answers,0,2));
//   }
// );

var questions = [
  { key: 'name',   msg: 'What is your name? ',       fn: 'prompt' },
  { key: 'living', msg: 'Are you living? ',          fn: 'confirm' },
  { key: 'age',    msg: 'How old are you? ',         fn: 'prompt' },
  { key: 'hair',   msg: 'What color is your hair? ', fn: 'prompt' },
  { key: 'big',    msg: 'Give us a description:',    fn: 'multiline' }
];

nodeAsk.ask(questions).then(
  function(answers) {
    console.log(JSON.stringify(answers,0,2));
  }
).catch(
  function(ex) {
    console.log(ex.stack);
  }
);

// const prompt = require('node-ask').prompt;
// const confirm = require('node-ask').confirm;
// const multiline = require('node-ask').multiline;
//
// prompt('What is your name? ').then(
//   function(answer) {
//     console.log('Your name is', answer);
//     return confirm('Are you living? ');
//   }
// ).then(
//   function(answer) {
//     console.log('You '+(answer?'are':'are not')+' living');
//     return multiline('Describe yourself:');
//   }
// ).then(
//   function(answer) {
//     console.log('You described yourself as:', answer);
//   }
// );
