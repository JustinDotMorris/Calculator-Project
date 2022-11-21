//JS test
console.log ("Hello World");
//------------------------------------------------------------
//Ids
    //Number ids
    let zeroButton = document.querySelector("#zeroButton");
    let oneButton = document.querySelector("#oneButton");
    let twoButton = document.querySelector("#twoButton");
    let threeButton = document.querySelector("#threeButton");
    let fourButton = document.querySelector("#fourButton");
    let fiveButton = document.querySelector("#fiveButton");
    let sixButton = document.querySelector("#sixButton");
    let sevenButton = document.querySelector("#sevenButton");
    let eightButton = document.querySelector("#eightButton");
    let nineButton = document.querySelector("#nineButton");

    //Operator ids
    let acButton = document.querySelector("#acButton");
    let plusMinusButton = document.querySelector("#plusMinusButton");
    let percentButton = document.querySelector("#percentButton");
    let divideButton = document.querySelector("#divideButton");
    let multiplyButton = document.querySelector("#multiplyButton");
    let minusButton = document.querySelector("#minusButton");
    let plusButton = document.querySelector("#plusButton");
    let dotButton = document.querySelector("#dotButton");
    let equalsButton = document.querySelector("#equalsButton");
    let backButton = document.querySelector("#backButton");
    //Input id
    let Calc__Top__Input = document.querySelector("#Calc__Top__Input")

// //Classes
//     //All buttons
//     const Calc__All__Buttons = document.querySelector(".Calc__All__Buttons");

//--------------------------------------------------------------
//Functions

//Calculation Array
const calculationArray = [];

//Number functions

const zeroButtonClickEvent = () => {
    zeroButton = "0";
    Calc__Top__Input.value += zeroButton;
};

const oneButtonClickEvent = () => {
    oneButton = "1";
    Calc__Top__Input.value += oneButton;
};

const twoButtonClickEvent = () => {
    twoButton = "2";
    Calc__Top__Input.value += twoButton;
};

const threeButtonClickEvent = () => {
    threeButton = "3";
    Calc__Top__Input.value += threeButton;
};

const fourButtonClickEvent = () => {
    fourButton = "4";
    Calc__Top__Input.value += fourButton;
};

const fiveButtonClickEvent = () => {
    fiveButton = "5";
    Calc__Top__Input.value += fiveButton;
};

const sixButtonClickEvent = () => {
    sixButton = "6";
    Calc__Top__Input.value += sixButton;
};

const sevenButtonClickEvent = () => {
    sevenButton = "7";
    Calc__Top__Input.value += sevenButton;
};

const eightButtonClickEvent = () => {
    eightButton = "8";
    Calc__Top__Input.value += eightButton;
};

const nineButtonClickEvent = () => {
    nineButton = "9";
    Calc__Top__Input.value += nineButton;
};

//Button functions

const acButtonClickEvent = () => {
    Calc__Top__Input.value = null;
};

// const plusMinusButtonClickEvent = () => {

// };

// const percentButtonClickEvent = () => {

// };


const divideButtonClickEvent = () => {
    divideButton = "/";
    Calc__Top__Input.value += divideButton;
};

const multiplyButtonClickEvent = () => {
    multiplyButton = "×";
    Calc__Top__Input.value += multiplyButton;
};

const minusButtonClickEvent = () => {
    minusButton  = "−";
    Calc__Top__Input.value += minusButton;
};

const plusButtonClickEvent = () => {
    plusButton = "+";
    Calc__Top__Input.value += plusButton;
};

const dotButtonClickEvent = () => {
    dotButton = ".";
    Calc__Top__Input.value += dotButton;
};

const backButtonClickEvent = () => {
    Calc__Top__Input = Calc__Top__Input.slice (0, -1);
};

const equalsButtonClickEvent = () => {
    Calc__Top__Input.value = num1 + num2;

};

//Event Listeners
//Number
zeroButton.addEventListener("click",zeroButtonClickEvent);
oneButton.addEventListener("click",oneButtonClickEvent);
twoButton.addEventListener("click",twoButtonClickEvent);
threeButton.addEventListener("click",threeButtonClickEvent);
fourButton.addEventListener("click",fourButtonClickEvent);
fiveButton.addEventListener("click",fiveButtonClickEvent);
sixButton.addEventListener("click",sixButtonClickEvent);
sevenButton.addEventListener("click",sevenButtonClickEvent);
eightButton.addEventListener("click",eightButtonClickEvent);
nineButton.addEventListener("click",nineButtonClickEvent);
//Operator
acButton.addEventListener("click",acButtonClickEvent);
plusMinusButton.addEventListener("click",plusMinusButtonClickEvent);
percentButton.addEventListener("click",percentButtonClickEvent);
divideButton.addEventListener("click",divideButtonClickEvent);
multiplyButton.addEventListener("click",multiplyButtonClickEvent);
minusButton.addEventListener("click",minusButtonClickEvent);
plusButton.addEventListener("click",plusButtonClickEvent);
dotButton.addEventListener("click",dotButtonClickEvent);
equalsButton.addEventListener("click",equalsButtonClickEvent);
backButton.addEventListener("click", backButtonClickEvent);






