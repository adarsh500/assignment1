const prompt = require('prompt-sync')();

var i = 0, smaller = 0,gcd, max = 1;
const n1 = prompt("Enter the first number ");
const n2 = prompt("Enter the second number ");

if (n1 > n2){
    smaller = n2;
}else{
    smaller = n1;
}
while (i <= smaller)
{
    if (n1%i == 0 && n2%i == 0){
        gcd = i;
    }
    if (gcd > max){
        max = gcd;
    }
    i++;
}
process.stdout.write("The GCD is " + max);