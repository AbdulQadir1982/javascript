// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
let inp = prompt("Enter City name").toLowerCase();
let city = "karachi";
inp === city ? alert('Welcome To City Of Lights') : alert('incorrect city name');

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
let user = prompt('Enter gender male or female').toLowerCase();
user === 'male' ? alert('Good Morning Sir') : user === 'female' ? alert('Good Morning Mam') : alert('Good morning');
