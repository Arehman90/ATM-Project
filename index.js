#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
// console.log("your cuurent balance is", myBalance);
let myPin = 4488;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "pay bill", "fastcash", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        (myBalance -= amountAns.amount);
        // console.log("your remaining balance is: " + myBalance);
        if (myBalance < 0) {
            console.log("insuficient balance");
        }
        else {
            console.log(`your cuurent balance is: ${myBalance}`);
        }
        ;
    }
    if (operationAns.operation === "pay bill") {
        let billAns = await inquirer.prompt([
            {
                name: "pay bill",
                message: "choose the bill option",
                type: "list",
                choices: ["electricity bill", "water bill", "gas bill"],
            },
        ]);
    }
    if (operationAns.operation === "fastcash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "do you want to fast cash?(choose any 1 option)",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"],
            },
        ]);
        myBalance -= fastcashAns.fastcash;
        console.log(`your remaining balance is:  ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is:   ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
