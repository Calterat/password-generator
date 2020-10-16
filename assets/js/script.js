// Assignment code here


// Generate password based on criteria
const generatePassword = () => {
  // Arrays of criteria type
  const lowCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const upCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const num = ['0','1','2','3','4','5','6','7','8','9']
  const specChar = [' ','!','"','#','$','%',"'",'(',')','*',',','-','.','/',':',';','>','=','<','?','@','[','\\',']','^','_','`','{','|','}','~']
// prompt for password criteria
// - length of password
// - at least 8 character, no more that 128
// - character types: lowercase, uppercase, numeric, and/or special characters
// validate input (at least one character type should be selected)
// generate password on an alert or written to the page
  return specChar;
}


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
