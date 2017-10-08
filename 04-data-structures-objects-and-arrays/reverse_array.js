/* Write two functions.

reverse_array:
  Takes an array as an argument and produces a new array that has the same
  elements in the inverse order.

reverse_array_in_place:
  Modifies the array given as an argument in order to reverse its elements.

Neither may use the standard reverse method.
*/

function reverse_array(array)
{
  let new_array = [];

  for (let i = 0; i < array.length; i++)
  {
    new_array.unshift(array[i]); // Adds elements to front of queue.
  }

  return new_array;
}

function reverse_array_in_place(array)
{
  for(let i = 0; i <= Math.floor(array.length/2); i++)
  {
    let tmp = array[array.length - 1 - i]; // Copy back to tmp.
    array[array.length - 1 - i] = array[i]; // Copy front to back.
    array[i] = tmp; // Copy tmp (i.e. old back) to front.
  }

  return array;
}

let test_array = [1, 2, 3, 4, 5]
console.log("Test array: " + test_array);
console.log("Reverse test array: " + reverse_array(test_array));
console.log("Test array: " + test_array);
console.log("Reverse test array in place: " +
              reverse_array_in_place(test_array));
console.log("Test array: " + test_array);
