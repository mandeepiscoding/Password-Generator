// Get references to the #generate element and textarea
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Function to generate a password based on user criteria
function generatePassword() {
  // Prompt for password length
  var passwordLength = prompt("Choose a password length (between 8 and 128 characters):");

  // Validate password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

  // Confirm character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return;
  }

  // Character pools for password generation
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";

  // Build character pool based on user selections
  var characterPool = "";
  if (includeLowercase) characterPool += lowercaseChars;
  if (includeUppercase) characterPool += uppercaseChars;
  if (includeNumeric) characterPool += numericChars;
  if (includeSpecial) characterPool += specialChars;

  // Generate password
  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    generatedPassword += characterPool.charAt(randomIndex);
  }

  return generatedPassword;
}

// Function to write generated password to the textarea
function writePassword() {
  var password = generatePassword();
  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);