var enter;
var checkNumber;
var checkCharacter;
var checkUppercase;
var checkLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
var choices;
var toUpper = function (x) {
    return x.toUpperCase();
};
// uppercase conversion
alpha2 = alpha.map(toUpper);

var create = document.querySelector("#generate");

create.addEventListener("click", function () {
    pw = generatePassword();
    document.getElementById("password").placeholder = pw;
});

function generatePassword() {
    enter = parseInt(prompt("I can generate a secure password for you. Please answer the following questions. How long should your password be? (Enter a number between 8 and 128)"));
    // user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {

        enter = parseInt(prompt("You must choose a number between 8 and 128"));

    } else {
        checkNumber = confirm("Would you like your password to include numbers?");
        checkCharacter = confirm("Would you like it to include special characters?");
        checkUppercase = confirm("Would you like it to include uppercase letters?");
        checkLowercase = confirm("Would you like it to include lowercase letters?");
    };
}