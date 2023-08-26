/*
    1. What happens when you add 2 strings together?
    2. What about when you add a number to a string?
    3. How about when you add booleans together?

    Try to think about how these behaviours might work,
    as well as why it might happen.
*/

let firstName = 'Ali';
firstName += ' Ahmed'
console.log(firstName);  // it concate the two strings it will be 'Ali Ahmed'

let id = 21;
id += ' this is my id number'
console.log(id); // the output will be 21 this is my id number

let booleans = true;
booleans += false 
console.log(booleans); // the output will be '1' b/c true = 1 and false = 0
