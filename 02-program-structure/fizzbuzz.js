/* Print all numbers from 1 to 100, except:
For numbers divisible by 3 (and not by 5), print "Fizz".
For numbers divisible by 5 (and not by 3), print "Buzz".
For numbers divisible by both 3 and 5, print "FizzBuzz".
*/

for (let i = 1; i <= 100; i++)
{
  let string = "";

  if (i % 3 == 0)
  {
    string = "Fizz";
  }

  if (i % 5 == 0)
  {
    string += "Buzz";
  }

  console.log(string || i);
}
