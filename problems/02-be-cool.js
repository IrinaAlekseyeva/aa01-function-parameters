/*
Define a function called beCool function that takes a string parameter and
returns a sentence saying that the given string "is cool!". For example, if
the first argument to beCool is "Mary", then the function should return
"Mary is cool!"
*/
function beCool(str){
  let outcome = (str + " is cool!");

  return outcome;
}
console.log(beCool("Music"));

 console.log(beCool("Music"));      // "Music is cool!"
 console.log(beCool("JavaScript")); // "JavaScript is cool!"
 console.log(beCool("The world"));  // "The world is cool!"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = beCool;
