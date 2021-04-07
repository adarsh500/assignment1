var n = 5;
var i = 1;
while (i <= n){
    var j = 1;
    while (j <= i){
        //process.stdout.write(toString(j));
        process.stdout.write(String(j));
        j += 1;
    }
    i += 1;
    process.stdout.write("\n");
}