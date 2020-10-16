// Assignment code here


// Generate password based on criteria
const generatePassword = () => {
  // Arrays of criteria type
  const lowCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const upCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const num = ['0','1','2','3','4','5','6','7','8','9']
  const specChar = [' ','!','"','#','$','%',"'",'(',')','*',',','-','.','/',':',';','>','=','<','?','@','[','\\',']','^','_','`','{','|','}','~']

  // Prompt User for Password Criteria

  // - Ask how many characters the password will be and parseInt the value to be used in loops.
  let passLength = prompt("How long do you want your password? (Minimum of 8 Characters and Maximum of 128)");
  passLength = parseInt(passLength);

  // - Ask if Lowercase letters are wanted
  let lowCaseChoice = confirm("Do you want lowercase values?");

  // - Ask if Uppercase letters are wanted
  let upCaseChoice = confirm("Do you want uppercase values?");

  // - Ask if Numbers are wanted
  let numChoice = confirm("Do you want number values?");

  // - Ask if Special Characters are wanted
  let specCharChoice = confirm("Do you want Special Characters?");

  // generate password



// VALIDATE: at least 8 character, no more that 128
// Validate user choice included as least one of the boolean experessions
// validate input (at least one character type should be selected)
  return 'Test';
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
