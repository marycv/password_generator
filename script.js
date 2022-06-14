// Create variable arrays for numbers, special characters, lower case letters, and uppercase letters

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "~"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Generate Password
function generatePassword() {

  // Prompt the user for their 'passwordLength' and store it in a variable
  var passwordLength = window.prompt("How many characters would you like your password to contain?");

  // Validate the password length and make sure it's a number between or equal to 8 and 128
    // If 'passwordLength' is less than 8 OR is greater than 128, alert the user
  if (passwordLength < "8" && passwordLength > "128") {
    return("Password length must be at least 8 characters");
  }
  
  // Prompt the user for if they want special characters and store it in a variable
  var specialCharacterType = window.confirm("Click OK to confirm including special characters.");

  // Prompt the user for if they want numbers and store it in a variable
  var numberCharacterType = window.confirm("Click OK to confirm including numeric characters.");

  // Prompt the user for if they want lowercase and store it in a variable
  var lowercaseCharacterType = window.confirm("Click OK to confirm including lowercase characters.");

  // Prompt the user for if they want uppercase and store it in a variable
  var uppercaseCharacterType = window.confirm("Click OK to confirm including uppercase characters.");
  
  // Validate that at least one character choice is true
  if (!specialCharacterType && !numberCharacterType && !lowercaseCharacterType && !uppercaseCharacterType) {
    // Alert the user they had bad data
    return "Error! Must select at least 1 character type.";
  }
  
  // DECLARE a new empty array to store the characters we want to use

    var myArray = [];

    var things = [1,2,4];
    var things2 = [1,2,3,5];

  // If 'specialCharacterType' is true
  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    myArray = myArray.concat(things);
   

  // If 'numberCharacterType' is true

    myArray = myArray.concat(things);
  // If 'lowercaseCharacterType' is true

  // If 'uppercaseCharacterType' is true

  myArray

  // for (var i = 0; i < passwordLength; i++)

    // Randomly select characters

    // Adding that character to a building password string

  // RETURN the completed string;

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
