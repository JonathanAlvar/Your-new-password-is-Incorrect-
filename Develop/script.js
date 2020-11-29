// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//My variables
var passwordLength = prompt("How long would you like your password? Must be between 8 - 128 characters")
var confirmspecialCharacters = confirm("Would you like to include special characters?");
var confirmnumber = confirm("Would you like to included numbers?");
var confirmlowerCase = confirm("Would you like to include lower case?");
var confirmupperCase = confirm("Would you like to include upper case?");

//My arrays
var passwordText = document.querySelector("#password");
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var userChoice;

//measure arrays
var specialCharacters = specialCharacters.length;
var number = number.length;
var lowerCase = lowerCase.length;
var upperCase = upperCase.length;

//Alerts and Prompts
alert("Hello!")
console.log("Hello")

alert("Lets get you a password!")
console.log("Lets get you a password")

//Generating a password
function generatePassword() {

  //if else functions, dble check is == true is required in if statement

  if (length < 128 && length > 8) {

    if (confirmspecialCharacters) {
      alert("Lets get you a special password!");
      console.log(specialCharacters);
    }
    else {
      alert("Nothing fancy...");
    };

    if (confirmnumbers) {
      alert("Your password will include numbers");
      console.log(numbers)
    }
    else {
      alert("Your password will not have numbers");
    };

    if (confirmupperCase) {
      alert("Your password will include upper case letters");
      console.log(upperCase)
    }
    else {
      alert("Your password will not have upper case letters");
    };

    if (confirmlowerCase) {
      alert("Your password will include lower case letters");
      console.log(lowerCase)
    }
    else {
      alert("Your password will not have lower case letters");
    };
  }

  else {
    alert("Please enter a password length between 8 and 128.");
    return
  };

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);