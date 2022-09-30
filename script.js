//this class allows us to input numbers to the display screen.
class Calculator {
    //outlines the constant elements that we want to appear on the display screen.
    constructor(inputInitText, inputSecondText) {
        //defines the input parameters for the display method.
        this.inputInitText = inputInitText
        this.inputSecondText = inputSecondText
        //running the clear function gives a clear display on initial use of the calculator.
        this.clear()
    }

    //allows the use of the clear button to reset the display screen.
    clear() {
        //sets both initial and secondary input rows to empty/ ""
        this.inputInit = ""
        this.inputSecond = ""
        //sets the function in use to undefined/awaiting input function.
        this.operation = undefined
    }
    //function to control screen input of numbers.
    affixNumber(number) {
        //this if statement stops more than one decimal point from being input.
        if (number === "." && this.inputSecond.includes(".")) return
        //converting both the already input numbers and currently input numbers to a string allows 
        //more numbers to be added to the string instead of overiting the previous input number.
        this.inputSecond = this.inputSecond.toString() + number.toString()
    }

    //allows us to input a calculator function (had to name parameter operation as function is a control word.)
    chooseFunction(operation) {
        //this will prevent a function input if no number input has been made.
        if(this.inputSecond === "") return
        //if the initial input number does not equal "blank" run the calculate function.
        if(this.inputInit !== "") {
            this.calculate()
        }
        //this sets the function (operation) input as the active function (operation)
        this.operation = operation
        //this moves the initial input number to the second input line.
        this.inputInit = this.inputSecond
        //this resets the initial input field to allow for further number input.
        this.inputInit = ""
    }

    //runs the input function.
    calculate() {

    }

    //allows the display to update with the correct output.
    updateScreen() {
        //this updates the secondary input field on the display screen with the number the user input.
        this.inputSecondText.innerText = this.inputSecond
        //this does the same with the initial input field.
        this.inputInitText.innerText = this.inputInit
    }
}


const numberButton = document.querySelectorAll('[data-number]')
const functionButton = document.querySelectorAll('[data-function]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const percentButton = document.querySelector('[data-percent]')
const plusMinusButton = document.querySelector('[data-plus-minus]')
const inputInitText = document.querySelector('[data-input-init]')
const inputSecondText = document.querySelector('[data-input-second]')

const calculator = new Calculator(inputInitText, inputSecondText)

//setting an event listener for all number buttons.
numberButton.forEach(button => {
    //event listener waits for a click on a number button.
    button.addEventListener("click", () => {
        //function takes inner text of button-
        calculator.affixNumber(button.innerText)
        //-and updates the display screen with it.
        calculator.updateScreen()
    })
})

//this is essentially the same code block as above (for number buttons) but adds a function input instead.
functionButton.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseFunction(button.innerText)
        calculator.updateScreen()
    })
})



// const clear = document.querySelector(".button__modifier--clear")
// const handleClickClear = ((event) => {
//     console.log("event object", event);
// })

// clear.addEventListener("click", handleClickClear);

// const plusMinus = document.querySelector(".button__modifier--plusMinus")
// const handleClickPm = ((event) => {
//     console.log("event object", event);
// })

// plusMinus.addEventListener("click", handleClickPm);

// const percent = document.querySelector(".button__modifier--percent")
// const handleClickPercent = ((event) => {
//     console.log("event object", event);
// })

// percent.addEventListener("click", handleClickPercent);