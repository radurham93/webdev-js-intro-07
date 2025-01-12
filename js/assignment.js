"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

let num1 = 5;
let num2 = 4;
let num3 = 47;

function returnTheRemainder(num1, num2) {
return num1 % num2;
}


function checkIfEven(num3){
    /*if ( num3 % 2 === 0)
       

 { return true;}
 else {return false;} 
 */
 return num3 %2 === 0;
}


function getTheFourthElement(lostNumbers){
    return lostNumbers[3];
}








function render() {
    remainderElement.textContent = returnTheRemainder(num1, num2);
checkIfEvenElement.textContent = checkIfEven(num3);
lostNumbersElement.textContent = getTheFourthElement(lostNumbers);
}

submissionBtn.addEventListener("click", function() {render();})