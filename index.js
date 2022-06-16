const inquirer = require("inquirer");
const Employee = require("./lib/employee.js");
const generatehtml = require("./utils/generatehtml.js")
const { Engineer, engineerQuestionsArray } = require("./lib/engineer.js");
const { Intern, internQuestionsArray } = require("./lib/intern.js");
const { Manager, managerQuestionsArray } = require("./lib/manager.js");
const employees = [];


const init = () => { managerQuestions() };
const managerQuestions = () => {
    inquirer
        .prompt(managerQuestionsArray)
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.office, data.email)
            employees.push(manager);
            whichEmployee();
        })
};
const whichEmployee = () => {
    inquirer.prompt(
        {
            type: "rawlist",
            name: "whichEmployee",
            message: "Which employee would you like to add next?",
            choices: ["Manager", "Engineer", "Intern", "Finished"],

        })
        .then(data => {
            if (data.whichEmployee === "Manager") { return managerQuestions(); };
            if (data.whichEmployee === "Engineer") { return engineerQuestions(); };
            if (data.whichEmployee === "Intern") { return internQuestions(); };
            if (data.whichEmployee === "Finished") {return generatehtml(data)};
        })

};
const internQuestions = () => {
    inquirer
        .prompt(internQuestionsArray)
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.school, data.email)
            employees.push(intern);
             whichEmployee();
        })
};
const engineerQuestions = () => {
    inquirer
        .prompt(engineerQuestionsArray)
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.github, data.email)
            employees.push(engineer);
            whichEmployee();
        })
};




init();











