

// functions that evaluate add,sub,mul,div
function add(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    if (num2===0){
        alert("FUCK YOU MFS,ARE YOU TRYING TO CRASH MY CALCULATOR??");
        return;
    }
    return num1/num2;
}


// input variables for num1,operator,num2 

let num1=0;
let num2="";
let opVariable=null;


// function that operate the calculator
function operate(num1,operator,num2){
    if (operator=="+"){
        return add(num1,num2);
    }
    else if(operator=="-"){
        return sub(num1,num2)
    }
    else if(operator=="*"){
        return mul(num1,num2);
    }
    else if(operator=="/"){
        return div(num1,num2); 
    }
}

//function to populate in the display and storing in a variable when a digit button is clicked
function populate(){
    const digits = document.querySelectorAll(".digit");
    const display = document.querySelector(".display");



    digits.forEach(digit => {
    digit.addEventListener("click", () => {
        display.value += (digit.textContent);
        num2 = Number(display.value);
        

    });
    });
}

populate();

const operator = document.querySelectorAll(".operator");
const display = document.querySelector(".display");

operator.forEach(op =>{
    op.addEventListener("click",()=>{
        num1 = num2;
        opVariable = op.textContent;
        display.value = "";
    })
})


const equals = document.querySelector(".equals");
equals.addEventListener("click",()=>{
    const result = operate(num1,opVariable,num2);
    display.value = result;
})