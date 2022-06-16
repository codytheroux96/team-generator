const Employee = require("./employee.js");

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
    constructor (name, id, school, email) {
        super(name, id, email);
        this.school = school;
    }
    getRole(){
        return "Intern";
    }
    getSchool(){
        return this.school;
    }
}
module.exports = {Intern, internQuestionsArray};