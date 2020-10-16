// Assignment code here


// Generate password based on criteria
// prompt for password criteria
// - length of password
// - at least 8 character, no more that 128
// - character types: lowercase, uppercase, numeric, and/or special characters
// validate input (at least one character type should be selected)
// generate password on an alert or written to the page



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
