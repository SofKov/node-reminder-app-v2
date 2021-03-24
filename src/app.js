// const yargs = require("yargs");
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');
const {addNote, listNotes, removeNote} = require("../utils/notes");


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

const main = () => {
    console.log(chalk.magenta.bold(figlet.textSync('Notes App')));
    app();
};

const app = async () => {
    const answers = await inquirer.prompt(topLevelQ);

    if (answers.options == "add"){
        const answer = await inquirer.prompt(addQ);
        addNote(answer.add);
        console.log("Adding new note:");
        console.log(answer.add);
        app();
    } else if (answers.options == "remove"){
        listNotes();
        const answer = await inquirer.prompt(removeQ);
        removeNote("Removing note:");
        app();
    } else if (answers.options == "list"){
        console.log("All notes are displayed below:");
        listNotes();
        app();
    } else if (answers.options == "exit"){
        console.log("Exiting Notes App");
    } else {
        console.log("Command not recognised");
    };

};


main();







// const command = process.argv[2];

// if (command == "add"){
//     console.log("Adding new note:");
//     addNote(yargs.argv.note);
// } else if (command == "remove"){
//     console.log("Removing note:");
//     removeNote(yargs.argv.note);
// } else if (command == "list"){
//     console.log("All notes are displayed below:");
//     listNotes();
// } else {
//     console.log("Command not recognised");
// };