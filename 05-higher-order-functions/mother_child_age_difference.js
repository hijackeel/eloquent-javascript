/* Using the example data set from this chapter, compute the average age
difference between mothers and children (the age of the mother when the child is
born). You can use the average function defined earlier in this chapter.

Note that not all the mothers mentioned in the data are themselves present in
the array. The byName object, which makes it easy to find a person's object from
their name, might be useful here. */

let ANCESTRY_FILE = require("./ancestry.js");
let ancestry = JSON.parse(ANCESTRY_FILE);
// console.log(ancestry.length);
// ^ == 39

function average(array)
{
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
  // Operators in JavaScript, unlike functions, are not values, so cannot be
  //  passed as arguments (the way plus is passed to reduce here).
}
//let test_array = [1, 2, 3, 4, 5];
//console.log(average(test_array));
// ^ == 3

let by_name = [];
ancestry.forEach(function(person) { by_name[person.name] = person; });
// console.log(by_name["Philibert Haverbeke"]);

let has_known_mother = ancestry.filter(function(person) {
  return by_name[person.mother];
});
// console.log(has_known_mother.length);
// ^ == 18

let age_differences = has_known_mother.map(function(person) {
  return person.born - by_name[person.mother].born;
});
console.log(age_differences);

console.log(average(age_differences));
