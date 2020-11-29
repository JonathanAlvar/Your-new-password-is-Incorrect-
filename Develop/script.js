
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//My arrays
var passwordText = document.querySelector("#password");
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var userChoice;

//measure arrays
var specialCharacters = specialCharacters.length;
var number = numbers.length;
var lowerCase = lowerCase.length;
var upperCase = upperCase.length;

//Generating a password
function writePassword() {
  var passwordLength = prompt("How long would you like your password? Must be between 8 - 128 characters")
  if (passwordLength <=128 && passwordLength >=8) {

    var specialCharacters = confirm("Would you like to include special characters?")
    if (specialCharacters) {
      alert("Lets get you a special password!");
      console.log(specialCharacters);
    }
    else {
      alert("Nothing fancy...");
    }

    var numbers = confirm("Would you like to included numbers?")
    if (numbers) {
      alert("Your password will include numbers");
      console.log(numbers)
    }
    else {
      alert("Your password will not have numbers");
    }

    var upperCase = confirm("Would you like to include upper case?")
    if (upperCase) {
      alert("Your password will include upper case letters");
      console.log(upperCase)
    }
    else {
      alert("Your password will not have upper case letters");
    }

    var lowerCase = confirm("Would you like to include lower case?")
    if (lowerCase) {
      alert("Your password will include lower case letters");
      console.log(lowerCase)
    }
    else {
      alert("Your password will not have lower case letters");
    }
  }
  else {
    alert("Please enter a password length between 8 and 128.");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);