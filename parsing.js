"use strict";

function parseAndDisplayName(inputName){
    let spacePosition = inputName.indexOf(" ");
    let firstName = inputName.substring(0, spacePosition);
    let lastName = inputName.substring(spacePosition + 1);
    console.log("Name : " + inputName);
    console.log("First name: " + firstName);
    console.log("Last name : " + lastName);
}
let name = "Brenda Kaye";
parseAndDisplayName(name);
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");