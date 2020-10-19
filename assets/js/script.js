// Assignment code here


// Generate password() called by the writePassword(). This returns the Password string the writePassword() will put in the html textarea

const generatePassword = () => {

  // Arrays of the criteria types the user will be able to select
  const lowCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const upCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const num = ['0','1','2','3','4','5','6','7','8','9'];
  const specChar = [' ','!','"','#','$','%',"'",'(',')','*',',','-','.','/',':',';','>','=','<','?','@','[','\\',']','^','_','`','{','|','}','~'];
  // - The password array that we will later concatenate as the generatePassword() return.
  let password = [];

  // Prompt User for Password Length
  // - initiating the vairable the while loop uses for validating user's password length input
  let lengthPrompt = true;
  // - Assigning this globally for while loop to modify but not contain as it is required for use in the other functions generate() and validate().
  let passLength = NaN; 
  // - While Loop validates the users input.
  while (lengthPrompt) {
    passLength = prompt("How long do you want your password? (Must be an Integer that is a Minimum of 8 Characters and Maximum of 128)");
    passLength = parseInt(passLength);
    if (passLength > 7 && passLength < 129) {
      lengthPrompt = false;
    } else {
      alert("Please type in numbers (whole integers) within the correct parameters for your input");
    }
  }

  // Prompt User for Character Sets to be used in the password generation
  // - Array of users choice for Lowercase, Uppercase, Number, and/or Special Characters with the names refering to the initializing arrays.
  // - Objects defined after While loop prompt for user prompt flow.
  // - The counts are used in validate() to validate whether at least one character type for each selected set is used.
  const choices = [
    {name: lowCase, confirm: confirm("Do you want lowercase values?"), count: 0},
    {name: upCase, confirm: confirm("Do you want uppercase values?"), count: 0},
    {name: num, confirm: confirm("Do you want number values?"), count: 0},
    {name: specChar, confirm: confirm("Do you want special characters?"), count: 0}
  ]

  // validate() calls on this function to reset the OBJECT: choices.counts to 0
  const resetCounts = () => {
    for (i = 0; i < choices.length; i++) {
      choices[i].count = 0;
    }
  }
  
  // Generate Password
  // - for loop runs for as many digits as user requested for password length.
  // - If OBJECT: choices.name is true in its own choices.confirm, pull a random digit from that object's named array, and place in temp digit array
  // - random the temp digit array to select the actual digit to be placed in the permanent password array
  const generate = () => {
    for (a = 0; a < passLength; a++) {
      // Used to digitChoises[] array location
      let c = 0;
      // The temp digit array that will hold the choices for the permanent digit in the password[] array location
      digitChoices = [];
      // Used to check if user didn't choose any character sets. Default is 0, which means no character sets where chosen.
      let choiceValidator = 0;
      for (b = 0; b < choices.length; b++) {
        // Check for true in 'confirm' in each object of 'choices'
        if (choices[b].confirm) {
          // when true - assign a random character from the objects named array to the digit choices array
          digitChoices[c] = choices[b].name[Math.floor(Math.random()*choices[b].name.length)];
          // increment digitChoices array location as well if choices.confirm is true
          c++;
          // increment if user had selected a charater set
          choiceValidator++;
        }
      }
      // Assign password array location of parent 'for' loop a random location from digitChoices array
      password[a] = digitChoices[Math.floor(Math.random()*digitChoices.length)];
      // If user declines all character types they are kicked out.
      if (choiceValidator === 0) {
        alert("You didn't select any charater types for your password!");
        alert("No password for you!");
        password[0] = false;
        // This boolean is used in the fullCycle()
        return true;
      }
    }
    // This boolean is used in the fullCycle()
    return false;
  }

  // If generate() comes back false then there is random characters in the password array. It will then validate(). If generate() is true it proceeds to end the generatePassword() at the last If statement.
    const fullCycle = () => {
    if (!generate()) {
      validate();
    }
  }

  // Validatess at least one character of each character type selected is present by running a count. if any come back as 0, fullCycle() reruns.
  const validate = () => {
    resetCounts();    
    for (d = 0; d < passLength; d++) {
      for (e = 0; e < choices.length; e++) {
        for (f = 0; f < choices[e].name.length; f++) {
          if (password[d] === choices[e].name[f]) {
            choices[e].count = choices[e].count + 1;
          }
        }
      }
    }
    for (g = 0; g < choices.length; g++) {
      if (choices[g].confirm && choices[g].count === 0) {
        return fullCycle();
      }
    }
  }

  
   // this starts the function train for the nested functions in generatePassword()
  fullCycle();

  // Concatenate the valid password array to produce one string to return. This is initialized with the first password array location. For Loop starts from second password array location.
  let concatenatedPassword = password[0];  
  for (i = 1; i < password.length; i++) {
    concatenatedPassword = concatenatedPassword + password[i];
  }

  // Return concatenated password to writePassword() if choiceValidator didn't return 'true', else will return text that prompts user to try again
  if (!password[0]) {
    return "Click the button if you want a password generated";
  } else {
    return concatenatedPassword;
  }
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
