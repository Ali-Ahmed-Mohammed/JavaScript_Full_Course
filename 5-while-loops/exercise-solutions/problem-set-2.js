/*
    Create a while loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/

console.log('Even Numbers');

let evenNumbers = 10;
while (evenNumbers <= 40) {
  if (evenNumbers % 2 === 0) {
    console.log(evenNumbers);
  }
  evenNumbers++;
} 

console.log('Odd Numbers');

let oddNumbers = 10;
while (oddNumbers <= 40) {
  if (oddNumbers % 2 === 1) {
    console.log(oddNumbers);
  }
  oddNumbers++;
} 
