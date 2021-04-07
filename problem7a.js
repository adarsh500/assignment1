const n = 5;
var i = 1;
while (i <= 5){
    var j = 1;
    while(j <= i){
        process.stdout.write("* ");
        j++;
    }
    process.stdout.write("\n");
    i++;
}