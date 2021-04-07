const prompt = require('prompt-sync')();

const amount = prompt('Enter the amount you want to deposit ');
const rate = prompt('Enter the rate ');
const time = prompt('Enter the duration ');
process.stdout.write("The simple interest is " + (amount * rate * time)/100 );