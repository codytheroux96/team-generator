const Employee = require("./employee");

const internQuestionsArray = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's ID number?",
    },
    {
        type: "input",
        name: "school",
        message: "What school does the intern go to?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
    },
]
class Intern extends Employee {
    constructor () {}
}
module.exports = {Intern, internQuestionsArray};