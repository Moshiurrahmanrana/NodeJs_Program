const prompt = require('prompt-sync')();
const number = prompt('Enter a Number: ');
var num = number;
if(num % 5 == 0) {
          console.log('Number is divisible by 5!');
       } else {
          console.log('Number is not divisible by 5!');
       }