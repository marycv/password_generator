// Create variable arrays for numbers, special characters, lower case letters, and uppercase letters

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ":", "'", ";", "'", ",", ".", "/", "<", ">", "?"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Generate Password
function generatePassword() {

  // Prompt the user for their password length and store it in a variable 'passwordLength'
  var passwordLength = window.prompt("How many characters would you like your password to contain?");

  // Validate the password length and make sure it's a number greater than or equal to 8 and  less than or equal to 128
    // If 'passwordLength' is less than 8 OR is greater than 128, alert the user and end the function
  if (passwordLength < 8 || passwordLength > 128) {
    return alert("Password length must be at least 8 characters");
  }
  
  // Prompt the user to click "OK" if they want special characters and store it in a variable 'specialCharacterType'
  var specialCharacterType = window.confirm("Click OK to confirm including special characters.");

  // Prompt the user to click "OK" if they want numbers and store it in a variable 'numberCharacterType'
  var numberCharacterType = window.confirm("Click OK to confirm including numeric characters.");

  // Prompt the user to click "OK" if they want lowercase and store it in a variable 'lowercaseCharacterType'
  var lowercaseCharacterType = window.confirm("Click OK to confirm including lowercase characters.");

  // Prompt the user to click "OK" if they want uppercase and store it in a variable 'uppercaseCharacterType'
  var uppercaseCharacterType = window.confirm("Click OK to confirm including uppercase characters.");
  
  // Validate that at least one character type choice is true
  if (!specialCharacterType && !numberCharacterType && !lowercaseCharacterType && !uppercaseCharacterType) {
    // If the user did not select at least 1 character type. alert the user and end the function
    return alert("Error! Must select at least 1 character type.");
  };
  
  // Declare a new empty array to store the characters we want to use
  var passwordArray = [];

  // If 'specialCharacterType' is true
  if (specialCharacterType) {
    // Concat 'specialCharacters' array to empty 'passwordArray'
    // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    passwordArray = passwordArray.concat(specialCharacters);
  };

  // If 'numberCharacterType' is true
  if (numberCharacterType) {
    // Concat 'numbers' array to 'passwordArray' array
    passwordArray = passwordArray.concat(numbers);
  };
  
  // If 'lowercaseCharacterType' is true
  if (lowercaseCharacterType) {
    // Concat 'lowercaseLetters' array to 'passwordArray' array
    passwordArray = passwordArray.concat(lowercaseLetters);
  };

  // If 'uppercaseCharacterType' is true
  if (uppercaseCharacterType) {
    // Concat 'uppercaseLetters' array to 'passwordArray' array
    passwordArray = passwordArray.concat(uppercaseLetters);
  };

  var userPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    userPassword += passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }
  return userPassword;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
