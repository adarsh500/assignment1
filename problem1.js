const prompt = require('prompt-sync')();

var credits = prompt("Enter the number of credits");
if (credits < 4500){
    process.stdout.write("Rising star");
} else if (credits >= 4500 && credits < 6000) {
    process.stdout.write("Mega leader");
} else if (credit >= 6000 && credits < 7500) {
    process.stdout.write("Gega leader");
} else {
    process.stdout.write("Tera leader");
}