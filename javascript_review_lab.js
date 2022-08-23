/*
A. Q + A
1. How do we assign a value to a variable?
 A- Var x = 5 or let x= 5

2. How do we change the value of a variable?
A- by calling the variable

3- How do we assign an existing variable to a new variable?
A- by using the = to give the variable a new value (Variable = new Variable)

4. Remind me, what are declare, assign, and define?
A- Declare is initialize; assign is give a value; define is create a variable

5. What is pseudocoding and why should you do it?
A- Pseudocode is a step-by-step written outline of your code before starting the coding process.
    Why? To describe how an algorithm should work/ To explain a computing process to less
    technical users. 
6. What percentage of time should be spent thinking about 
how you're going to solve a problem vs actually typing in code to solve it?
A- 60%
*/

// B. Strings
// For all other questions that involve writing code, 
// you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// What is the value of firstVariable?
// Create a variable called your Name and set it equal to your name 
// as a string. Then, write an expression that takes the 
// string "Hello, my name is " and the variable yourName so that it 
// returns a new string with them concatenated.

// Let firstVariable = ("Hello World");
// let new firstVariable = (6, 7, 8);
// let secondVariable = firstVariable;
// let new secondVariable=("This is the day");
// console.log (firstVariable);

// let yourName=("Jude");
// console.log(concat("Hello, my name is " + yourName));
// return 

// C. Booleans
// Using the provided variable definitions, replace the 
// blanks so that all log statements print truein the console.

// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a<b);
//   console.log(c>d);
//   console.log(e);

//   console.log(true || false);
//   console.log(false && false && false && false && false || true);
//   console.log(false && false);
//   console.log(e && 'Kevin');

//   console.log(a + b = c);
//   console.log(a * a = d);
//   console.log(48 = '48');


//   D. The farm
// 1.Declare a variable animal. Set it to be either "cow" or something else
// 2.Write code that will print out "mooooo" if the it is equal to cow
// 3.Change your code so that if the variable animalis anything other than a 
// cow, it will print "Hey! You're not a cow."
// Commit


// let animal = "pig";

// if(animal==="Cow"){
// console.log("mooooo");
// }
// else{
//     console.log("not a cow");
// }


// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if 
// the age is 16 years or older, or, if the age is younger than 16,
//  a message should print "Sorry, you're too young."


let age = 20;
if(age>=16){
    console.log('Here are the keys!');
}
else if(age<16){
    console.log('Sorry, you are too young');
}
