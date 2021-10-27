const prompt = require('prompt-sync')();
const number = prompt('Enter a Number: ');
var n = number;

if (n >=2 && n <=10) {
    console.log(`The factorial is ${n} `);}
   
 else {
    console.log("out of range");
}