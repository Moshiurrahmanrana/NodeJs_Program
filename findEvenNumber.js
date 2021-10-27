const prompt = require('prompt-sync')();
 
const number = prompt('Enter a Number: ');
var r = number;


for (let i = 1; i <= r; i++) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }