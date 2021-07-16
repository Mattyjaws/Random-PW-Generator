var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specials = "!@#$%^&*()";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  
  var length = window.prompt("How long do you want your password, pick a number between 8 and 128!");
  console.log(typeof length);
  
  if (length < 8 || length > 128) {
    window.alert("Choose a number betwen 8 and 128!!!!!")
    return;
  }
  
  var upper = window.confirm("Do you want to use uppercase letters?");
  var lower = window.confirm("Do you want to use lowercase letters?");
  var number = window.confirm("Do you want to use numbers?");
  var special = window.confirm("Do you want to use special symbols?");
  var passString = "";

  let charInput = length
  upper ? (charInput += uppercase) : "";
  lower ? (charInput += lowercase) : "";
  number ? (charInput += numbers) : "";
  special ? (charInput += specials) : "";

  for (let i=0; i < length; i++) {
    var index = Math.floor(Math.random() * charInput.length);
    var random = charInput[index];
    passString += random;
  }

  return passString;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
