// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");

//My variables

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

console.log("Hello")

console.log("Lets get you a password")

//Alerts and Prompts

alert("Hello")

alert("Lets get you a password")



//if else functions


//Generate the password

// Write password to the #password input
function writePassword(event) {


  passwordText.value = password;

}

//prompts to ask user




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
