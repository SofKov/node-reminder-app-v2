const yargs = require("yargs");
const {addNote, listNotes, removeNote} = require("../utils/notes");


const command = process.argv[2];

if (command == "add"){
    console.log("Adding new note:");
    addNote(yargs.argv.note);
} else if (command == "remove"){
    console.log("Removing note:");
    removeNote(yargs.argv.note);
} else if (command == "list"){
    console.log("All notes are displayed below:");
    listNotes();
} else {
    console.log("Command not recognised");
};