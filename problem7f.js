//  let n = 9, i = 1;
//  let n1 = (n+1)/2;
//   while(i <= n1){
//     var k = 1;
//     while (k <= (n1 - i)){
//         process.stdout.write(" ");
//         k++;
//     }
//     var j = 1;
//     while(j <= i){
//       process.stdout.write("*");
//       j++;
//     }
//     var l = 0;
//     while (l < (i - 1)){
//       process.stdout.write("*");
//       l++;
//     }
//     i++;
//     process.stdout.write("\n");
//     while (i > n1 && i <= n){
//       var k = 1;
//       while (k < i - 4){
//         process.stdout.write(" ");
//         k++
//       }
//       let j = 1;
//       let l = 1;
//       while(j <= (i + l)){
//         process.stdout.write("*");
//         j++;
//       }
//       l = l - 3;
//       i++;
//       process.stdout.write("\n");
//     }
//   }



let n = 5;

let row = 0;
let row_mir = 0;
while (row_mir < 2 * n - 1){
     
    let col = 0;
    let col_mir = 0
    while (col_mir < 2 * n - 1 ){
        if (col < n - row - 1){
            process.stdout.write("  ");
        } else {
            process.stdout.write("* ");
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