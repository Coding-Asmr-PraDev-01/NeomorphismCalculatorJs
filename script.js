const inputScreen = document.querySelector('.amountValue');
const buttons = document.querySelectorAll('button');
let pricipalAmt = document.querySelector('.principal');
let time = document.querySelector('.time');
let rateOfInterest = document.querySelector('.rate');
const simpleInterest = document.querySelector('.simpleInterest');
const equalBtn = document.querySelector('.equalBtn');
const checkBx = document.querySelector('#checkBx');

checkBx.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});

buttons.forEach((button) => {
    button.addEventListener('click', calculateResult, false);
});

function calculateResult(e) {
    const clickedBtnVal = e.target.value;
    
    if(clickedBtnVal === "="){
        if(inputScreen.value !== ""){
            inputScreen.value = "$"+eval(inputScreen.value);
        }

        if(pricipalAmt.value !== "" && time.value !== "" && rateOfInterest.value !== ""){
            let val = parseInt((pricipalAmt.value * time.value * rateOfInterest.value)) / 100;
            simpleInterest.value = val;
        }  
       
    }else if(clickedBtnVal === "C"){
        inputScreen.value = "";
        pricipalAmt.value = "";
        time.value = "";
        rateOfInterest.value = "";
        simpleInterest.value = "";
    }else{
        inputScreen.value += clickedBtnVal;
    }
}

