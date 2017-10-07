/* Generate a string of #s, spaces, and newlines to represent a grid whose
proportions are defined by a variable "size".

E.g. Output when size = 8:

# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #

*/

let size = 8, chessboard = "";

for (let row = 1; row <= size; row++)
{
  for (let col = 1; col <= size; col++)
  {
    chessboard += (col + row) % 2 ? " " : "#";
  }
  chessboard += "\n";
}

console.log(chessboard);
