/* Write a function, "deep_equal", that takes two values and returns true only
if they are the same value or are objects with the same properties whose values
are also equal when compared with a recursive call to deep_equal.

To find out whether to compare two things by identity (use the === operator for
that) or by looking at their properties, you can use the typeof operator. If it
produces "object" for both values, you should do a deep comparison. But you have
to take one silly exception into account: by a historical accident, typeof null
also produces "object".
*/

function deep_equal(a, b)
{
  if (typeof a == 'object' && typeof b == 'object' && a != null && b != null)
  {
    let a_prop_count = 0;
    for (let property in a)
    {
      a_prop_count++;
    }

    let b_prop_count = 0;
    for (let property in b)
    {
      b_prop_count++;
    }

    if (a_prop_count == b_prop_count)
    {
      for (let property in a)
      {
        if (!(property in b) || !deep_equal(a[property], b[property]))
        {
          return false;
        }
      }
      return true;
    }
    else
    {
      return false;
    }
  }
  else
  {
    return a === b;
  }
}

a = {p1: 4, p2: {p1: 4, p2: null}}
b = {p1: 4, p2: {p1: 4, p2: null}}
c = {p1: 4, p2: {p1: 4, p2: 7}}
d = {p1: 4, p2: {p1: 4, p3: null}}
e = {p1: 4, p2: {p1: 4, p2: null, p3: 'x'}}
console.log(deep_equal(a, b));
console.log(deep_equal(a, c));
console.log(deep_equal(a, d));
console.log(deep_equal(a, e));
