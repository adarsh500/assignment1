const prompt = require('prompt-sync')();

var num = prompt("Enter the number ");
var n;
var newNum = 0;
while(num >= 1)
{
    n = num%10;
    newNum = (newNum + n) * 10;
    num = parseInt(num / 10);
}
console.log(newNum/10);
