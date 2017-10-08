/* Write four functions:

array_to_list: Creates a linked list from an array.

list_to_array: Creates an array from a linked list.

prepend: Takes an element and a list, and creates a new list that adds the
         element to the front of the input list.

nth: A recursive function that takes a list and a number, and returns the
     element at the given position in the list, or "undefined" when there is no
     such element.
*/

function prepend(element, list)
{
  return {value: element, rest: list};
}


function array_to_list(array)
{
  let list = null;

  for (let i = array.length - 1; i >= 0; i--)
  {
    list = prepend(array[i], list);
  }

  return list;
}


function nth(list, index)
{
  if (index == 0)
  {
    return list.value;
  }

  else if (list.rest === null)
  {
    return undefined;
  }

  else
  {
    return nth(list.rest, --index);
  }
}


function list_to_array(list)
{
  let array = [];

  for (let node = list; node; node = node.rest)
  {
    array.push(node.value);
  }

  return array;
}

let test_array = [1, 2, 3];
console.log(test_array);

let test_list = array_to_list(test_array);
console.log(test_list);

console.log(nth(test_list, 0));
console.log(nth(test_list, 1));
console.log(nth(test_list, 2));
console.log(nth(test_list, 3));

console.log(list_to_array(test_list));
