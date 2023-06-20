// 1) while Initialize a variable = 1 and check that less than 10 using while loop and increment that value 
// with +=2 and print a out put as follows:
//  1
//  3
//  5
//  7
//  9

// let variable = 1;

// while (variable < 10) {
//   console.log(variable);
//   variable += 2;
// }

// 2) do while 
//  print 12345 in single line using do while statement.
// In this alternative example, we concatenate the value of the variable to the output string during each iteration of the do-while loop. After the loop completes, we print the output string, which contains all the numbers concatenated in a single line.
let variable = 1;
let output = '';

do {
  output += variable;
  variable++;
} 
while (variable <= 5);

console.log(output);


