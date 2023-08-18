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
  console.log("Password length:", passwordLength);

  // 2. Validate the input
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt("Length must be between 8 and 128 characters. Please enter your password length."));
  }

// b. lowercase , uppercase, numbers, special characters

  var includeSpecialCharacters = confirm("Would you like special characters in your password?");
  console.log("includeSpecialCharacters:", includeSpecialCharacters);

  var lowerCases = confirm("Would you like lower case letters in your password?");
  console.log("lowerCases:", lowerCases);

  var upperCases = confirm("Would you like upper case letters in your password?");
  console.log("upperCases:", upperCases);

  var numbers = confirm("Would you like numbers in your password?");
  console.log("numbers:", numbers);

if (!upperCases && !numbers && !lowerCases && !includeSpecialCharacters){
  alert("Select at least one character type.");
// 3. generate password 
 // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
 var minimumCount = (numbers ? 1 : 0) + (lowerCases ? 1 : 0) + (upperCases ? 1 : 0) + (includeSpecialCharacters ? 1 : 0);


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

 if (numbers) {
  minimumNumbers = functionArray.getNumbers();
  minimumCount++;
}

if (lowerCases) {
  minimumLowerCases = functionArray.getLowerCases();
  minimumCount++;
}

if (upperCases) {
  minimumUpperCases = functionArray.getUpperCases();
  minimumCount++;
}

if (includeSpecialCharacters) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters();
  minimumCount++;
}

 // empty string variable for the for loop below
 var randomPasswordGenerated = "";

  // Loop to generate random characters
  for (let i = 0; i < passwordLength - minimumCount; i++) {
    var validFunctions = Object.keys(functionArray).filter(functionKey => {
      return (numbers && functionKey === 'getNumbers') ||
             (lowerCases && functionKey === 'getLowerCases') ||
             (upperCases && functionKey === 'getUpperCases') ||
             (specialCharacters && functionKey === 'getSpecialCharacters');
    });

    var randomFunctionKey = validFunctions[Math.floor(Math.random() * validFunctions.length)];
    randomPasswordGenerated += functionArray[randomFunctionKey]();
  }




 // to make sure characters are added to the password
 randomPasswordGenerated += minimumNumbers;
 randomPasswordGenerated += minimumLowerCases;
 randomPasswordGenerated += minimumUpperCases;
 randomPasswordGenerated += minimumSpecialCharacters;


 console.log("Generated password:", randomPasswordGenerated);
 return randomPasswordGenerated;

};
};
