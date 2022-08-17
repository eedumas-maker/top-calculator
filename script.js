let solution = "";

let x = null;
let y = null;
let temp = null;

let operator = null;

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
    solution = "";
    x = null;
    y = null;
    temp = null;
    operator = null;
}

