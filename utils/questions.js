const fs = require("fs");
const inquirer = require('inquirer');

const topLevelQ = [
    {
        type: "list", 
        name: "options", 
        message: "What would you like to do?", 
        choices: ["add", "remove", "list", "exit"],
    },
];

const addQ = [
    {
        type: "input",
        name: "add",
        message: "What would you like to add?",
    },
];

const removeQ = [
    {
        type: "input",
        name: "remove",
        message: "Which note would you like to remove? Please type a number: ",
    },
];

module.exports = {
    topLevelQ,
    addQ,
    removeQ,
};