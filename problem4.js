const prompt = require('prompt-sync')();

const n = prompt("Enter the value of the last digit ");
var a = 2;
for (var i = 1; a < n; i++){
    console.log(a);
    a += (4 * i);
}
return 0;











