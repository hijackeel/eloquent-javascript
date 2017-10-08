/* Write a "range" function:
  Input:
    1) start
    2) end
    3) step (optional)

  Output:
    An array containing all the numbers from "start" up to and including "end",
    counting by "step". Step can be negative, and defaults to 1 if start < end,
    or to -1 if start > end.

    e.g:
      range(1, 10, 2) == [1, 3, 5, 7, 9]
      range(5, 2, -1) == [5, 4, 3, 2]

Write a "sum" function:
  Input:  An array of numbers.
  Output: The sum of the numbers.
*/

function range(start, end, step)
{
  let numbers = [];

  if (arguments.length < 3)
  {
    step = start < end ? 1 : -1;
  }

  if (step > 0)
  {
    for (let i = start; i <= end; i += step)
    {
      numbers.push(i);
    }
  }
  else
  {
    for (let i = start; i >= end; i += step)
    {
      numbers.push(i);
    }
  }

  return numbers;
}

function sum(numbers)
{
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
  {
    sum += numbers[i];
  }
  return sum;
}

console.log("The range from 1 to 10 by 2 is " + range(1, 10, 2));
console.log("The range from 5 to 2 by -1 is " + range(5, 2, -1));
console.log("The range from 8 to 4 by -1 is " + range(8, 4));
console.log("The range from 5 to 5 by 1 is " + range(5, 5, 1));
console.log("The range from 5 to 5 by 2 is " + range(5, 5, 2));
console.log("The sum of 1 through 10 is " + sum(range(1, 10))); // Should be 55.
