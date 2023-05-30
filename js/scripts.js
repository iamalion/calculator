
//business logic
function add(number1,number2){
    return number1 + number2;
}

function subtract(number1,number2){
    return number1 - number2;
}

function multiply(number1,number2){
    return number1 * number2;
}

function divide(number1,number2){
    return number1 / number2;
}

//UI logic
const number1 = parseInt(prompt("Enter a number"));
const number2 = parseInt(prompt("Enter another number"));
let result = "those two numbers results in"
window.alert("Adding " + result + add(number1,number2) + "."); 
window.alert("Subtracting " + result + subtract(number1, number2) + ".");
window.alert("Multiplying " + result + multiply(number1,number2)+".");
window.alert("Dividing " + result + divide(number1,number2)+".");
;

