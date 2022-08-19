let displayNum = "";

let firstNum = null;
let secondNum = null;

let operator = null;
let operatorJustSet = false;

const display = document.querySelector(".display");

const num1 = document.querySelector("#one");
const num2 = document.querySelector("#two");
const num3 = document.querySelector("#three");
const num4 = document.querySelector("#four");
const num5 = document.querySelector("#five");
const num6 = document.querySelector("#six");
const num7 = document.querySelector("#seven");
const num8 = document.querySelector("#eight");
const num9 = document.querySelector("#nine");
const num0 = document.querySelector("#zero");

const addFunc = document.querySelector("#add");
const subFunc = document.querySelector("#sub");
const multFunc = document.querySelector("#mult");
const divFunc = document.querySelector("#div");

const clearFunc = document.querySelector("#clear");
const equalsFunc = document.querySelector("#equals");

// Let's add some functions!

// when number is pressed, it's added to display value from right to left (so hitting 1 when 10 is displayed, displays 101)
// ok this is all fucked up, because i need to account for a few scenarios that i'll think of in a bit:
/*
1. display is empty -> show a number
2. display has a number -> concatenate a number
3. display has a number and an operator has just been pressed -> clear display put prior number in storage (actually, set that in Operator)
*/
const numClick = function(a){

    // locks display if over 10 digits long
    if(displayNum.length >= 10){
        document.querySelectorAll(".num").disabled = true;
        return;
    }

    // if they just set an operator, clear the display first
    if(operator !== null && operatorJustSet === true){
        displayNum = "";  // reset the Display
        return display.textContent = `${displayNum}`;
    }

    displayNum = displayNum + `${a}`;

    return display.textContent = `${displayNum}`;
};

const operatorClick = function(a){

    firstNum = Number(displayNum);
    operatorJustSet = true;

    switch(op){
        case "add":
            return operator = "add"
            break;
        case "sub":
            return operator = "sub";
            break;
        case "mult":
            return operator = "mult";
            break;
        case "div":
            return operator = "div";
            break;
    };

    console.log("firstNum: "+firstNum);
    console.log("operator: "+operator);

};

// function to run operations (ideally when Equals is pressed)
const operate = function(operator,a,b){
    if (operator == "add"){
        return add(a,b);
    } else if (operator == "subtract") {
        return subtract(a,b);
    } else if (operator == "multiply") {
        return multiply(a,b);
    } else if (operator == "divide") {
        return divide(a,b);
    }
};

// let's write the functions for add, subtract, multiply, divide
const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = function(a,b) {
    return a * b;
};

const divide = function(a,b){
    if(b == 0){
        return "Err: Divide by Zero"
    }
    return Math.round((a / b)*10)/10;
};

// setting everything back to null should clear it, I hope!
const clear = function(){
    displayNum = "";
    x = null;
    y = null;
    temp = null;
    operator = null;
    return display.textContent = `${displayNum}`;
};

// let's add all the listners at the end!
num1.addEventListener('click', () => numClick(1));
num2.addEventListener('click', () => numClick(2));
num3.addEventListener('click', () => numClick(3));
num4.addEventListener('click', () => numClick(4));
num5.addEventListener('click', () => numClick(5));
num6.addEventListener('click', () => numClick(6));
num7.addEventListener('click', () => numClick(7));
num8.addEventListener('click', () => numClick(8));
num9.addEventListener('click', () => numClick(9));
num0.addEventListener('click', () => numClick(0));

clearFunc.addEventListener('click', () => clear());
// put in equals in a moment

// now the operator buttons
addFunc.addEventListener('click', () => operatorClick("add"))
subFunc.addEventListener('click', () => operatorClick("sub"))
multFunc.addEventListener('click', () => operatorClick("mult"))
divFunc.addEventListener('click', () => operatorClick("div"))





