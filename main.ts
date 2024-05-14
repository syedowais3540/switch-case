#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import number from "inquirer/lib/prompts/number.js";
// step one
const answers :{
    numberOne: number
    numberTwo: number
    operator: string
} = await inquirer.prompt([
    { type: "number",
      name: "numberOne",
      message: "Enter your first number"
    },
    {type: "number",
    name: "numberTwo",
    message: "Enter your second number"
},
   {type: "list",
    name: "operator",
    message: "Enter your opertor",
    choices: ["+", "-", "*", "/"]}
])


// step 2
const { numberOne, numberTwo, operator } = answers;

let results
 switch (operator) {
    case "+":
        results = numberOne + numberTwo;
        break;
    case "-":
        results = numberOne + numberTwo;
        break;    
    case "*":
        results = numberOne + numberTwo;
        break;
    case "/":
        results = numberOne + numberTwo;
        break;
        default:
            console.log("Invalid operator");
 }
 console.log(`${numberOne} ${operator} ${numberTwo} = ${results}`);