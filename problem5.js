const prompt = require('prompt-sync')();

var number = prompt("Enter the number");
var count = 0;
while (number >= 1)
{
    number = number/10;
    count++;
}
console.log(count);