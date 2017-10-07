/* Define a recursive function to check whether a whole number is even or odd
(input: number, output: Boolean), according to these facts:

Zero is even.
One is odd.
For any other number N, its evenness is the same as N-2 and N+2.
*/

function is_even(number)
{
  let abs = number < 0 ? -number : number;
  return abs <= 1 ? !abs : is_even(abs-2);
}

for (let i = 5; i >= -5; i--)
{
  console.log("Is " + i + " even? " + is_even(i));
}
