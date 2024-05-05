#!/usr/bin/env node
import inquirer from "inquirer";
let number = await inquirer.prompt([{
        name: "firstNumber",
        message: " your first number",
        type: "number"
    },
    { name: "secondNumber",
        message: " your second number",
        type: "number" },
    { name: "option",
        message: "selec one of the operation",
        type: "list",
        choices: ["add", "del", "multi", "div"]
    }]);
if (number.option === "add") {
    console.log(number.firstNumber + number.secondNumber);
}
else if (number.option === "del") {
    console.log(number.firstNumber - number.secondNumber);
}
else if (number.option === "multi") {
    console.log(number.firstNumber * number.secondNumber);
}
else if (number.option === "div") {
    console.log(number.firstNumber / number.secondNumber);
}
