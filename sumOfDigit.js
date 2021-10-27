const prompt = require('prompt-sync')();
const number = prompt('Enter a Number: ');
var value = number;

    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);