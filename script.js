let displayNum = "";
let solution = 0;

let previousNum = null;
let equalsNum = null;
let equalsAgain = false;

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
    // console.log("operator: "+operator);
    // console.log("previousNum: "+previousNum);
    // console.log("operatorJustSet: "+operatorJustSet);

    // locks display if over 10 digits long
    if(displayNum.length >= 10){
        document.querySelectorAll(".num").disabled = true;
        return;
    }

    // if they just set an operator, clear the display first
    if(operator !== null && operatorJustSet === true){
        displayNum = "";  // reset the Display
        displayNum = `${a}`; // now make it that first number pressed
        operatorJustSet = false; // reset it

        return display.textContent = `${displayNum}`;
    }

    displayNum = displayNum + `${a}`;

    return display.textContent = `${displayNum}`;
    console.log(displayNum);
};

const operatorClick = function(op){

    if (previousNum == null){
        previousNum = Number(displayNum);
    }
    equalsAgain = false;
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
};

const equalsClick = function(){



    if(equalsAgain == false){
        equalsNum = displayNum;
        displayNum = operate(operator,previousNum,displayNum);
        equalsAgain = true;
    }
    else {
        displayNum = operate(operator,equalsNum,displayNum);
    }
    
    console.log("operator: "+operator);
    console.log("previousNum: "+previousNum);
    console.log("displayNum: "+displayNum);
    console.log("equalsAgain: "+equalsAgain);
    console.log("equalsNum: "+equalsNum);

    return display.textContent = `${displayNum}`;



}

// function to run operations (ideally when Equals is pressed)
const operate = function(operator,a,b){
    // put in 
    a = Number(a);
    b = Number(b);
    
    if (operator == "add"){
        return add(a,b);
    } else if (operator == "sub") {
        return subtract(a,b);
    } else if (operator == "mult") {
        return multiply(a,b);
    } else if (operator == "div") {
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
        return "No Div by 0";
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
equalsFunc.addEventListener('click', () => equalsClick());

// now the operator buttons
addFunc.addEventListener('click', () => operatorClick("add"))
subFunc.addEventListener('click', () => operatorClick("sub"))
multFunc.addEventListener('click', () => operatorClick("mult"))
divFunc.addEventListener('click', () => operatorClick("div"))



