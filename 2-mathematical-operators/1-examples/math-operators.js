
// in javaScript we have different kinds of operaters. We use these operators along with our variables and constants to create expressions.

//  and with these expressions we can implement logic and algorithm.

// So here are different kinds of operators we have in javaScript.

// Arithmetic,  Assignment,  Comparison,  Logical,  Bitwise


// ==============Arithmetic Operator

// Addition

let age = 10 + 23;
console.log(age); // 33

// Subtraction

let points = 50 - 19;
console.log(points);

// Multiplication
let score = 7 * 50;
console.log(score);

// Division
let divide = 100 / 13;
console.log(divide);

// Modulus (Remainder)
let mod = 9 % 3;
console.log(mod);

// Exponentiation
let exp = 4 ** 3;
console.log(exp);

// ==============Assignment Operator

let x = 5;
x++; // same as
x = x + 1; // or 
x += 1;

// the '=' sign is called assignment operator it used to assign a value to the variable;


// ==============Comparison Operator

let y = 2;

// Ralational 

console.log(y < 1);
console.log(y <= 2);
console.log(y > 3);
console.log(y >= 2);

// Equality

console.log(y === 1);
console.log(y !== 1);

// ==============Equality Operator

// Strict Equlaity : ensures the both two values we have on the side of this operator have the same type and same value

console.log(1 === 1);  // true
console.log(1 === '1'); // false

// Lose Equality : doesn`t care about the types matching, if the type don`t match it convert the type of what we have on the right side to match what we have to the left side. And then only will check id the values are equal.

console.log(1 == 1);
console.log(1 == '1'); // true

// ==============Ternary Operator

// if a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver; customer.

let point = 120;
let type = point > 100 ? 'gold' : 'silver';
console.log(type);



// Logical AND (&&)
// Returns TRUE if the operators are TRUE

let highIncome = 500;
let lowerIncome = 250;

let goodIncome = highIncome < 501 && lowerIncome == 250;

console.log(goodIncome);

// Logical OR (||)
// Returns TRUE if one of the operator is TRUE

let id = 20;
let name = 'Ali';

let eitherCorrect = id == 10 || name == 'Ali';
console.log(eitherCorrect);

// Logical NOT (!)

let income = true;
let credit = false;
let eligible = !income;
console.log(eligible);


// ============ Logical operators with non boolean values

// falsy value (false)

// undefined
// null
// 0
// false
// ''
// Nan

let userColor = 'red';
let defaulColor = 'orange';
let currentColor = userColor || defaulColor;

console.log(currentColor);  // red b/c our user has selected a color. in contrast if the user not selected the color or it will be a falsy we get 'orange' because default color is 'orange'


