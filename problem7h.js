let n = 5;

let row = 0;
let row_mir = 0;
while (row_mir < 2 * n - 1){
     
    let col = 0;
    let col_mir = 0
    while (col_mir < 2 * n - 1 ){
        if (col < n - row){
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
        
        if(col_mir < n - 1){
            col++;
        } else {
            col--;
        }
        col_mir++;
    }
    process.stdout.write("\n");
    
    if (row_mir < n - 1){
        row++;
    } else {
        row--;
    }
    
    row_mir++;
}