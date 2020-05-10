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