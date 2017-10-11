/* Use the reduce method in combination with the concat method to "flatten" an
array of arrays into a single array that has all the elements of the input
arrays. */

let sub_array_1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let sub_array_2 = ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
let sub_array_3 = ['q', 'r', 's', 't', 'u', 'v'];
let sub_array_4 = ['w', 'x', 'y', '&', 'z'];
let main_array = [sub_array_1, sub_array_2, sub_array_3, sub_array_4];
console.log(main_array.reduce(function (tick, tock)
                              {return tick.concat(tock);}));
