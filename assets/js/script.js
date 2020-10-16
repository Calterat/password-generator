// Assignment code here


// Generate password based on criteria

const generatePassword = () => {
  // Arrays of criteria type
  const lowCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const upCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const num = ['0','1','2','3','4','5','6','7','8','9'];
  const specChar = [' ','!','"','#','$','%',"'",'(',')','*',',','-','.','/',':',';','>','=','<','?','@','[','\\',']','^','_','`','{','|','}','~'];
  // - The password array that will be built by the for loop
  let password = [];

  // Prompt User for Password Criteria
  // - Starts while loop for validating user's password length input
  let lengthPrompt = true;
  // - Assigning this globally to not be stuck in while loop
  let passLength = NaN; 
  // - Ask how many characters the password will be and parseInt the value to be used in loops.
  while (lengthPrompt) {
    passLength = prompt("How long do you want your password? (Must be an Integer that is a Minimum of 8 Characters and Maximum of 128)");
    passLength = parseInt(passLength);
    if (passLength > 7 && passLength < 128) {
      lengthPrompt = false;
    } else {
      alert("Please type in numbers (whole integers) within the correct parameters for your input");
    }
  }

  // - Array of users choice for Lowercase, Uppercase, Number, and/or Special Characters
  // - Objects defined after While loop prompt for prompt flow
  const choices = [
    {name: lowCase, confirm: confirm("Do you want lowercase values?")},
    {name: upCase, confirm: confirm("Do you want uppercase values?")},
    {name: num, confirm: confirm("Do you want number values?")},
    {name: specChar, confirm: confirm("Do you want Special Characters?")}
  ]

  // Generate Password
  // - for loop runs for as many digits as user requested
  // - If an array piece is true, pull a random digit from that object, and place in temp password array
  // - random the temp password array to select the actual digit to be placed in the perminant password
  for (a = 0; a < passLength; a++) {
    let c = 0;
    digitChoices = [];
    for (b = 0; b < choices.length; b++) {
        choices[b].confirm;
      }
      // Check for true in 'confirm' in each object of 'choices'
      // when true - assign a random character from the objects named array to the digit choices array
      if (choices[b].confirm) {
        digitChoices[c] = choices[b].name[Math.floor(Math.random()*choices[b].name.length)];
        // increment digitChoices array location
        c++;
      }
    // Assign password array location of parent for loop a random location from digitChoices
    password[a] = digitChoices[Math.floor(Math.random()*digitChoices.length)];
  }
  return password;
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
