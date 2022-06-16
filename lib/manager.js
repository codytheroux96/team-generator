const Employee = require("./employee");

const managerQuestionsArray = [
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
        name:  "office",
        message: "What school does the manager's office number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
    },
]
class Manager extends Employee {
    constructor (name, id, office, email) {
        this.office = office;
    }
    getRole(){
        return "Manager";
    }
    getOffice(){
        return this.office;
    }
}
module.exports = {Manager, managerQuestionsArray};