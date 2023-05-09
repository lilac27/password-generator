// Create special characters
var specialCharacters = "!@#$%^&*()";
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword () {
  console.log("Hey! You clicked the button !")

// 1. prompt the user for the password criteria
// a. password length between 8 and 128
  var passwordLength = Number(prompt("Please enter the number of characters to be used for your password."));


// b. lowercase , uppercase, numbers, special characters

  var specialCharacters = confirm("Would you like special characters in your password?");
  var lowerCases = confirm("Would you like lower case letters in your password?");
  var upperCases = confirm("Would you like upper case letters in your password?");
  var numbers = confirm("Would you like numbers in your password?");

// 2. validate the input 

if (isNaN(length) || length<8 || length>128) length = Number(prompt("Length must be between 8 and 128 characters. Please enter your password length."));


if (!upperCases && !numbers && !lowerCases && !special){
  alert("Select at least one character type.");
  
  specialCharacters = confirm("Would you like specia characters in your password?");
  lowerCases = confirm("Would you like lower case letters in your password?");
  upperCases = confirm("Would you like upper case letters in your password?");
  numbers = confirm("Would you like numbers in your password?");

// 3. generate password 
 // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
 var minimumCount = 0;


 // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

 var minimumNumbers = "";
 var minimumLowerCases = "";
 var minimumUpperCases = "";
 var minimumSpecialCharacters = "";


 // Generator functions**
 var functionArray = {
   getNumbers: function() {
     return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
   },

   getLowerCases: function() {
     return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
   },

   getUpperCases: function() {
     return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
   },

   getSpecialCharacters: function() {
     return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
   }

};

 // Checks to make sure user selected ok for all and uses empty minimums from above

 if (numbers === true) {
   minimumNumbers = functionArray.getNumbers();
   minimumCount++;

 }

 if (lowerCases === true) {
   minimumLowerCases = functionArray.getLowerCases();
   minimumCount++;

 }

 if (upperCases === true) {
   minimumUpperCases = functionArray.getUpperCases();
   minimumCount++;

 }

 if (special === true) {
   minimumSpecialCharacters = functionArray.getSpecialCharacters();
   minimumCount++;

 }

 // empty string variable for the for loop below
 var randomPasswordGenerated = "";

 // loop getting random characters
 for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
   var randomNumberPicked = Math.floor(Math.random() * 4);

   randomPasswordGenerated += randomNumberPicked;

 }

 // to make sure characters are added to the password
 randomPasswordGenerated += minimumNumbers;
 randomPasswordGenerated += minimumLowerCases;
 randomPasswordGenerated += minimumUpperCases;
 randomPasswordGenerated += minimumSpecialCharacters;


 return randomPasswordGenerated;

}
}
