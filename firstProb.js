const prompt = require('prompt-sync')();
 
const number = prompt('Enter a Number: ');
var num = number;
 
   if(num % 2 == 0) {
      console.log('Number is even!');
   } else {
      console.log('Number is odd!');
   }
