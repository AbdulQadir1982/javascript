// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
function checkCharacter(char) {
  
    // Convert the character to its ASCII code
    let asciiCode = char.charCodeAt(0);
  
    // Check if the character is a number
    if (asciiCode >= 48 && asciiCode <= 57) {
      return char + " is a number.";
    }
    // Check if the character is an uppercase letter
    else if (asciiCode >= 65 && asciiCode <= 90) {
      return char + " is an uppercase letter.";
    }
    // Check if the character is a lowercase letter
    else if (asciiCode >= 97 && asciiCode <= 122) {
      return char + " is a lowercase letter.";
    } else {
      return char + " is not a number, uppercase letter, or lowercase letter.";
    }
    
  }
   // Get user input
   let inputChar = prompt("Enter a character:");
  // Check the input character
  let result1 = checkCharacter(inputChar);
  console.log(result1);
/////////////////////////////////////////////////////////////

  //   2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
  
  function compareIntegers(num1, num2) {
    if (num1 > num2) {
      return `${num1} is larger than ${num2}.`;
    } else if (num2 > num1) {
      return `${num2} is larger than ${num1}.`;
    } else {
      return "Both integers are equal.";
    }
  }
  // Get user input for two integers
  let input1 = +(prompt("Enter the first integer:"));
  let input2 = parseInt(prompt("Enter the second integer:"));
  
  // Check and display the comparison result
  let result2 = compareIntegers(input1, input2);
  console.log(result2);
  ///////////////////////////////////////////////////////////////

//   3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
  function checkNumberType(number) {
    if (number > 0) {
      return "Positive number.";
    } else if (number < 0) {
      return "Negative number.";
    } else {
      return "Zero.";
    }
  }
  
  // Get user input for a number
  let userInput = parseFloat(prompt("Enter a number:"));
  
  // Check and display the number type
  let result3 = checkNumberType(userInput);
  console.log(result3);
  ///////////////////////////////////////////////////////

//   4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

  function isVowel(character) {
    // Convert the character to lowercase to handle both uppercase and lowercase vowels
    character = character.toLowerCase();
  
    // Check if the character is a vowel
    return character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u';
  }
  
  // Get user input for a character
  let userInput1 = prompt("Enter a character:");
  
  // Check and display if the character is a vowel or not
  let result4 = isVowel(userInput);
  
  if (result4) {
    console.log("The character entered is a vowel.");
  } else {
    console.log("The character entered is not a vowel.");
  }
  /////////////////////////////////////////////////////////////
  
  
  
  
  