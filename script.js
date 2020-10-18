// character sets for user to choose from
var alphaChars = 'abcdefghijklmnopqrstuvwxyz';
var numChars = '0123456789';
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// password is generated that matches the selected criteria
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // ask user to select which criteria to include in the password
    var lower = confirm('Would you like lowercase letters?');
    var upper = confirm('Would you like uppercase letters?');
    var numeric = confirm('Would you like numeric characters?');
    var special = confirm('Would you like special characters?');

    if (!lower && !upper && !numeric && !special) {
        alert('Try again - please select at least one type of character.');
    } else {
        // user can choose a length of at least 8 characters and no more than 128 characters
        var length = prompt('How long would you like your password to be? Choose from 8 to 128 characters.');

        if (isNaN(length) || length < 8 || length > 128) {
            alert('Try again - please select a valid length of at least 8 characters and no more than 128 characters.');
        } else {
            // initialize empty strings for password character set and actual password
            var passwordSet = '';
            var pw = '';

            // lowercase, uppercase, numeric, and/or special characters are added to possible password character set
            if (lower) {
                passwordSet += alphaChars;
            }

            if (upper) {
                passwordSet += alphaChars.toUpperCase();
            }

            if (numeric) {
                passwordSet += numChars;
            }

            if (special) {
                passwordSet += specialChars;
            }

            // randomly select character from applicable set
            for (var i = 0; i < length; i++) {
                var random = Math.floor(Math.random() * passwordSet.length);
                pw += passwordSet[random];
            }

            return pw;
        }
    }

    // return null if user does not select any criteria or valid length
    return null;
}

// the password is written to the page through the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// add event listener to generate button which generates series of prompts for password criteria
generateBtn.addEventListener("click", writePassword);

// TODO
// input should be validated and at least one character type should be selected