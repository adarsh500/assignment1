var n = 5, i = 1;
while (i <= n){
    var k = 1;
    while (k <= (n - i)){
        process.stdout.write(" ");
        k++;
    }
    var j = 1;
    while (j <= i){
        process.stdout.write(String(j));
        j++;
    }
    var l =  i - 1;
    while (l > 0){
        process.stdout.write(String(l));
        l--;
    }
    process.stdout.write("\n");
    i++;
}