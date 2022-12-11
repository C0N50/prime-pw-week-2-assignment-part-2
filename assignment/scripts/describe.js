// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Creates a variable named "name" and sets it to the value of string 'Dane'.
// Checks if the value of "name" is strictly equal (must be same type and value) to the string 'Mary'.
// 'Dane' is not strictly equal to 'Mary' so the console logs 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Creates a variable "secret" with an unnasiged value which is by default assigned the value of undefined.
// Creates a variable "code" and assigns it with the numerical value of 123.
// Checks if the value of code is strictly equal to 123. 
// If so assigns the variable secret with the value of string 'super' and doubles the value of code.
// Code is 123, so the value of secret is now string 'super' and the value of code is now 246.
// If code is greater than 250 secret is assigned a new string value of 'duper' overwriting 'super'
// Code is only 246 and is NOT greater than 250 so the value of secret is still 'super'.
// The console logs its string value 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Creates variables isStudent, age, and zip with respective values boolean true, numerical 34, and numerical 55407
// Checks if both isStudent and if zip > 80,000 and if so console logs "You're a student on the west coast"
// If either of above conditional is not met, checks if isStudent is false or if the age is under 30 and if so console logs "What are your hobbies?".
// If both above conditionals are not met, checks if isStudent is true and if so console logs "Welcome to Prime!"
// If above conditional is not met console logs "How about the weather?"

// In this case, 55407 is NOT greater than 80,000 and so code is not executed and the next conditional is checked.
// Next, both the isStudent is NOT false AND the age is > 34 so the code is not executed and the next conditional is checked.
// Finally, isStudent is true and the console logs "Welcome to Prime!" and returns/breaks out of the if else chain.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

//FIX - colorOne and colorTwo are set to the wrong colors and should be swapped. colorOne = 'blue'; & colorTwo = 'red';
//Only colorOne is updated to 'purple' in the conditional statement. The executed code between the conditional brackets should have another line with colorTwo = 'purple';
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'


//FIX the conditional is intended to check that both temp>39 AND time>=4 must be true, but is using the logical OR || which is the incorrect functionality. 
//The conditional should use the logical and && statement. e.g if (temp > 39 && time >= 4) {}
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

//FIX the conditional checking minAge should not check <= it should only check <. 
//We are also not instructed to console.log 'No entry' so this part should be dropped. and the conditional should be simplified to not include an else.
// if (age >= minAge) {
//  console.log('enter');
//}


/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

