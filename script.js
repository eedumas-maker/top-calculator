let displayNum = "";

let x = null;
let y = null;
let temp = null;

let operator = null;

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
const num10 = document.querySelector("#zero");

const addFunc = document.querySelector("#add");
const subFunc = document.querySelector("#sub");
const multFunc = document.querySelector("#mult");
const divFunc = document.querySelector("#div");

const clearFunc = document.querySelector("#clear");
const equalsFunc = document.querySelector("#equals");

// Let's add some functions!

// when number is pressed, it's added to display value from right to left (so hitting 1 when 10 is displayed, displays 101)
const numClick = function(a){
    displayNum = displayNum + `${a}`;
    return display.textContent = `${displayNum}`;
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
}

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
}

// let's add all the listners at the end!
num1.addEventListener('click', () => numClick(1));
num2.addEventListener('click', () => numClick(2));
num3.addEventListener('click', () => numClick(3));
