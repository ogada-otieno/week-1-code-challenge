// Challenge 1: Student Grade Generator (Toy Problem)

// First, we need to prompt the user to input a number
// prompt-sync module is a function that creates prompting functions, so we call it in order to get the actual prompting function
// Two things are happening here:
//Firstly, prompt-sync makes it possible to use Node.js and not depend on the browser for testing.
//Secondly, prompt() is working as it's intended, by prompting the user to input a number.

const prompt = require('prompt-sync')();

let marks = prompt('What is your marks? ');
console.log(`The marks inputted is: ${marks}.`);

// The function studentGradeGenerator() contains conditionals for different grades.
// It will output "Value not recognize!" if the user enters negative values and marks greater than 100.

function studentGradeGenerator(marks) {
if (marks >= 0 && marks <= 39) {
    console.log("Grade E.");
} else if (marks >= 40 && marks <= 49) {
    console.log("Grade D.");
} else if (marks >= 50 && marks <= 59) {
    console.log("Grade C.");
} else if (marks >= 60 && marks <= 79) {
    console.log("Grade B.");
} else if (marks >= 80 && marks <= 100) {
    console.log("Grade A.");
} else {
    console.log("Value not recognized!");
}
}
studentGradeGenerator(marks);
