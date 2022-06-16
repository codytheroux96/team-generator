const Employee = require("./employee.js");

const engineerQuestionsArray = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID number?",
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
    },
]
class Engineer extends Employee {
    constructor(name, id, github, email) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}
module.exports = { Engineer, engineerQuestionsArray };