// Q1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
function ques1() {
let frstNumber = +prompt("Enter 1st number");
let _2nd_number = +prompt("Enter 2nd number");
let sum = frstNumber + _2nd_number;
document.write("<h3> Result of sum <h3/>");
document.write("<p> the sum of " + frstNumber + " and " + _2nd_number + " is " + sum);
document.write("<hr/>");};

// ==================================
// Q2. 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
function ques2() {
    let frstNumber = +prompt("Enter 1st number");
    let _2nd_number = +prompt("Enter 2nd number");    
let sub = frstNumber - _2nd_number;
document.write("<h3> Result of subtraction <h3/>");
document.write("<p> the subtraction of " + frstNumber + " and " + _2nd_number + " is " + sub);
document.write("<hr/>");


let mult = frstNumber * _2nd_number;
document.write("<h3> Result of multiplication <h3/>");
document.write("<p> the multiplication of " + frstNumber + " and " + _2nd_number + " is " + mult);
document.write("<hr/>");


let dev = frstNumber / _2nd_number;
document.write("<h3> Result of division  <h3/>");
document.write("<p> the division of " + frstNumber + " and " + _2nd_number + " is " + dev);
document.write("<hr/>");


let mod = frstNumber % _2nd_number;
document.write("<h3> Result of modules  <h3/>");
document.write("<p> the modules of " + frstNumber + " and " + _2nd_number + " is " + mod);
document.write("<hr/>");};

// =========================
// Q3. Do the followng math expretions 
// a) Declare a variable
let num;
// b) show the value of your browser
console.log(num);
// c) ntialize the variable wth some number
 num = 5;
//  d) show the initial value in your browser
console.log("initial value is ",num);
// e) increament the variable
let increament = num++;
// f) Show the value of variable in your browser like “Value
// after increment is: 6”.
console.log("value after increament is ",num);
// g) Add 7 to the variable.
let anotherNum = 7;
// h) Show the value of variable in your browser like “Value after addition is: 13”.
let addition = num + anotherNum;
console.log("value after addition is ", addition);
// i) Decrement the variable.
let decreament = --addition;
// j) Show the value of variable in your browser like “Value
// after decrement is: 12”.
console.log("after decrement is ",decreament);
// k) Show the remainder after dividing the variable’s value
// by 3.
let remainder = decreament % 3;
console.log("After dividing the variables the reminder value is ",remainder);
function ques3() {
    swal("Result In Console");
};
// ============================================
// Q4. Cost of one movie ticket is 600 PKR. Write a script to store
function ques4() {
    const ticket = +prompt("Enter Cost of Ticket ",600);
    document.write(" Ticket Price Is " + ticket );
    // ticket price in a variable & calculate the cost of buying 5 tickets
    let quant = +prompt("Enter quantity of tickets ",5);
    let total = ticket * quant;
    document.write("Total Cost to buying " + quant + " Tickets is rupees " + total);
};

// ============================================
// Q5. Write a script to display multiplication table of any number in your browser. E.g
function ques5() {
    let tab = +prompt("Enter your Table Number here ", 5 );
    document.write(tab + " X " + " 1 " + " = " + tab*1 + "<br/>");
    document.write(tab + " X " + " 2 " + " = " + tab*2 + "<br/>");
    document.write(tab + " X " + " 3 " + " = " + tab*3 + "<br/>");
    document.write(tab + " X " + " 4 " + " = " + tab*4 + "<br/>");
    document.write(tab + " X " + " 5 " + " = " + tab*5 + "<br/>");
    document.write(tab + " X " + " 6 " + " = " + tab*6 + "<br/>");
    document.write(tab + " X " + " 7 " + " = " + tab*7 + "<br/>");
    document.write(tab + " X " + " 8 " + " = " + tab*8 + "<br/>");
    document.write(tab + " X " + " 9 " + " = " + tab*9 + "<br/>");
    document.write(tab + " X " + " 10 " + " = " + tab*10);
};
// =================================================

// Q6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
function ques6() {
    let centgrade = +prompt("Enter value centigrade to convert farenhieght");
    const f_formula = (centgrade * 9 / 5) + 32;
    let farenhieght = f_formula;
    const Celsius = (farenhieght - 32) * (5 / 9);
    document.write("<h5>Centigrade Convert to farenhight Value <h5/>");
    document.write("Output of " + centgrade + " is " + Celsius);

    document.write("<h5> Farenhight Convert to Centigrade Value <h5/>");
    document.write("Output of " + Celsius + " is " + farenhieght);

    console.log(f_formula);
    console.log(Celsius);
};

// Q7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.
function ques7() {
    let item1 = +prompt("Enter Item1 price",650);
    let item2 = +prompt("Enter Item2 price",100);
    let quant1 = +prompt("Enter quantity item1",3);
    let quant2 = +prompt("Enter quantity item2",7);
    const shippingCharges = 100;
    let total = (item1*quant1) + (item2*quant2) + shippingCharges;
    document.write("<h2> your total amount is " + total + "</h2>");

}

// q8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
function ques8() {
    let total_marks = +prompt("Enter total Marks",980);
    let marksObtain = +prompt("Enter total MarksObtain",804);
    let percentage = (marksObtain / total_marks) * 100;
    document.write(" <h2> your percentage is " + Math.round( percentage ) + "%" + "<h2/>");

}




