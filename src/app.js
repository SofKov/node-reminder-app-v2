const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');
const {addNote, listNotes, removeNote} = require("../utils/notes");
const {topLevelQ, addQ, removeQ} = require("../utils/questions");

const main = () => {
    console.log(chalk.magenta.bold(figlet.textSync('Notes App', {font: 'Small Keyboard'})));
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
        removeNote(answer.remove);
        app();
    } else if (answers.options == "list"){
        console.log("All notes are displayed below:");
        listNotes();
        app();
    } else if (answers.options == "exit"){
        console.log(chalk.magenta.bold(figlet.textSync('Exiting Notes App')));
    } else {
        console.log("Command not recognised");
    };

};


main();
