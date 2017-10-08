/* Write a function "count_char".
  Input:
    A character.

  Output:
    A function that takes a string as input and counts the number of times the
      character occurs in the string.

Write a function "count_B" that uses count_char to count the number of uppercase
Bs in a string.
*/

function count_char(character)
{
  return function(string)
         {
           let char_count = 0;
           for (let i = 0; i < string.length; i++)
           {
             if (string.charAt(i) == character)
             {
               char_count++;
             }
           }
           return char_count;
         };
}

let count_B = count_char("B");

console.log(count_B("B b B"));
