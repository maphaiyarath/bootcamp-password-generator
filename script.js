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
  var passwordSet = '';

  if (!lower && !upper && !numeric && !special) {
    alert('Generate a password by selecting at least one of the criteria.');
  } else {
    var length = prompt('How long would you like your password to be? Choose from 8 to 128 characters.');
    if (lower) {
      // passwordSet.push(alphaChars);
      passwordSet += alphaChars;
    }
  
    if (upper) {
      // passwordSet.push(alphaChars.toUpperCase());
      passwordSet += alphaChars.toUpperCase();
    }
    
    if (numeric) {
      // passwordSet.push(numChars);
      passwordSet += numChars;
    }
  
    if (special) {
      // passwordSet.push(specialChars);
      passwordSet += specialChars;
    }
  
    var pw = '';
    
    for (var i = 0; i < length; i++) {
      var random = Math.floor(Math.random() * passwordSet.length);
      pw += passwordSet[random];
    }
  
    return pw;
  }

  return null;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
