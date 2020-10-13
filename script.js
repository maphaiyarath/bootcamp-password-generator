var alphaChars = 'abcdefghijklmnopqrstuvwxyz';
var numChars = '0123456789';
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  alert('Welcome to the Password Generator!');
  var lower = confirm('Would you like lowercase letters?');
  var upper = confirm('Would you like uppercase letters?');
  var numeric = confirm('Would you like numeric characters?');
  var special = confirm('Would you like special characters?');
  
  var passwordSet = []

  if (lower) {
    passwordSet.push(alphaChars);
  }

  if (upper) {
    passwordSet.push(alphaChars.toUpperCase());
  }
  
  if (numeric) {
    passwordSet.push(numChars);
  }

  if (special) {
    passwordSet.push(specialChars)
  }
  console.log(passwordSet);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
