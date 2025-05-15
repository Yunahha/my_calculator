const buttons = document.querySelectorAll('.button')
const numbers = document.querySelectorAll('.number')
const display = document.querySelector('.display')
const dot = document.querySelector('.dot')
const clear = document.querySelector('.clear')
const operbut = document.querySelectorAll('.operator')
const equl = document.querySelector('.equl')

let waitingForSecondOperand = false;
let operationgMultipleTime = false;

buttons.forEach((ele) => {
    ele.addEventListener("click", (evn) => console.log(evn.target.value))
})

function calCul (event){
    if (!event.target.classList.contains('number')) return;

    if (waitingForSecondOperand == true) {
        display.textContent = event.target.textContent;
        waitingForSecondOperand = false;
    } else if (display.textContent === '0') {
        display.textContent = event.target.textContent;
    } else {
        display.textContent += event.target.textContent;
    }
}

buttons.forEach((but) => but.addEventListener("click", calCul))

function addDot(dot){
    if (display.textContent.includes('.') === false){
        display.textContent += dot.target.textContent
    }
}

function del(){
    display.textContent = "0"
    firstOperand = null;
    secondOperand = null;
    operator = null;
    result = null;
    waitingForSecondOperand = false;
}

dot.addEventListener("click", addDot)

clear.addEventListener("click", del)

//---------------------------------------------------------------

let firstOperand = null
let operator = null
let secondOperand = null
let result = null

function operatingFir(firops){
    if ((firstOperand === null) && (operationgMultipleTime == false)){
        firstOperand = display.textContent
        operator = firops
        waitingForSecondOperand = true
        console.log(`First Operand: ${firstOperand}, Operator: ${operator}`)
    }
    else if(operationgMultipleTime == true){
        firstOperand = display.textContent
        operator = firops
        waitingForSecondOperand = true
        secondOperand = null
        console.log(`First Operand: ${firstOperand}, Operator: ${operator}`)
    }
    
}

operbut.forEach((e)=>e.addEventListener("click", (b) => operatingFir(b.target.textContent)))

function calculate(){
    if(secondOperand === null){
        secondOperand = display.textContent
    }
    
    const a = Number(firstOperand)
    const b = Number(secondOperand) 

    if(operator === '%'){
        result = a % b
    }
    else if(operator === '/'){
        result = a / b
    }
    else if(operator === '*'){
        result = a * b
    }
    else if(operator === '-'){
        result = a - b
    }
    else if(operator === '+'){
        result = a + b
    }

    display.textContent = result
    operationgMultipleTime = true
}

equl.addEventListener("click", calculate)

