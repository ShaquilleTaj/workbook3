"use strict";

window.onload = init;
function init(){
    const buttonClicked = document.getElementById("Btn");

    buttonClicked.onclick = displayAsString;
}
function displayAsString(){
    const Date = document.getElementById("dateInput").value;
    let answer1 = document.getElementById("answer");
    answer1.innerHTML = Date.toString();
}