
/*
A function definition(also called a function declaration, or function statement) consists of the function keyword, followed by: 
The name of the function.
A list of arguments to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly brackets, { }.
For example, the following code defines a simple function named square: 
 */

function square(number) {
  return number * number;
}

/*
The function square takes one argument, called number. The function consists of one statement that says to return the argument of the function (that is, number) multiplied by itself. The return statement specifies the value returned by the function.
*/

/*
Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function
*/


// function declaration

const sayHello = () => {
  console.log("Hello, jello!");
  console.log("meow!");
};

// "Calling" the function

sayHello("moo!");
sayHello("foo!");
sayHello();
sayHello();


// this is arrow function

const hello = () => {
  return 'hello';
};
 console.log("Hey!");
hello();



// let create a function that add two numbers.

const sum = (num1, num2) => {
  console.log(num1);
  console.log(num2);
  console.log(num1 + num2);
};

// sum(5, 6);
// sum(10, 10);
sum();
// sum(1);



const mul = (num1, num2) => {
  return num1 * num2; // 10 * 10
  // return 100
};

mul(2, 3); // 6

const result = mul(10, 10);
// const result = 100;
console.log(result);

