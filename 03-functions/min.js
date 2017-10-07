// Write a function "min" that takes two arguments and returns their minimum.

function min(a, b)
{
  return a < b ? a : b;
}

for (let a = -5; a <= 5; a++)
{
  for (let b = 5; b >= -5; b--)
  {
    console.log("a = " + a +
              "\nb = " + b +
            "\nmin = " + min(a,b) +
            "\n\n");
  }
}
