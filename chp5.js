// Q1

document.write("sum of 3 and 5 is 8");

//Q2

document.write("sub of 5 - 2 = 3");
document.write("multipication of 4 * 2 = 8");
document.write("devide of 5 / 20 = 4");
document.write("module of 4");

//Q3
 // a. Declare a variable
 let myVariable;

 // b. Show the value of variable after declaration
 document.write("Value after variable declaration is: " + myVariable + "<br>");

 // c. Initialize the variable with some number
 myVariable = 5;

 // d. Show the initial value of the variable
 document.write("Initial value: " + myVariable + "<br>");

 // e. Increment the variable
 myVariable++;

 // f. Show the value after increment
 document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable
 myVariable += 7;

 // h. Show the value after adding 7
 document.write("Value after adding  is: " + myVariable + "<br>");
// value after decrement 
 myVariable--;
 document.write("Value after decrement is: " + myVariable + "<br>");
myVariable=0
 document.write("The reminder is : " + myVariable + "<br>");
//Q4
 
var ticketPrice = 600; // in PKR
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("The cost of buying " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR.");

//Q5

let number = 4;
document.write("<h2>Multiplication Table of " + number + "</h2>");
document.write("<table>");
for (let i = 1; i <= 10; i++) {
    document.write("<tr>");
    document.write("<td>" + number + " x " + i + "</td>");
    document.write("<td>=</td>");
    document.write("<td>" + (number * i) + "</td>");
    document.write("</tr>");
}
document.write("</table>");

//Q6
document.write("<h2>Q6  </h2>");
let c = 30 ;
let f = (c*9/5)+32
document.write(c+' *C is ' + f + '*F');

//q7

let totalMarks = 500;
let marksObtained = 420;


var percentage = (marksObtained / totalMarks) * 100;


document.write("<h2>Percentage Calculation</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

//q8
let num = 20;


const result = ((number + 5) * 10) 
document.write("Result: " + result);

//q9

const currentYear = new Date().getFullYear();

const birthYear = 1990; 


const age1 = currentYear - birthYear;
const age2 = age1 - 1;


document.write("They are either " + age1 + " or " + age2 + " years old.");




