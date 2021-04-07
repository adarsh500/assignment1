function printPascal(n)
    {
    for (let line = 0; line < n; line++)
    {
        for (let i = 0; i <= line; i++)
        process.stdout.write(binomialCoeff(line, i)+" ");
        process.stdout.write("\n");
        }
        
    }
function binomialCoeff(n, r)
    {
        let res = 1;
         
        if (r > n - r)
        r = n - r;
             
        for (let i = 0; i < r; ++i)
        {
            res *= (n - i);
            res /= (i + 1);
        }
        return res;
    }

    let n = 6;
    printPascal(n);