const Employee = require("./employee");

const managerquestionsArray = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID number?",
    },
    {
        type: "input",
        name: "school",
        message: "What school does the manager's office number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
    },
]
class Manager extends Employee {
    constructor () {}
}
module.exports = {Manager, managerquestionsArray};