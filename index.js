const inquirer = require("inquirer");
const Employee = require("./lib/employee.js");
const generatehtml = require("./utils/generatehtml.js")
const { Engineer, engineerQuestionsArray } = require("./lib/engineer.js");
const { Intern, internQuestionsArray } = require("./lib/intern.js");
const { Manager, managerQuestionsArray } = require("./lib/manager.js");
const employees = [];

//this is the init function that starts the user off with a prompt to fill out information about the manager
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
//this is the prompt that will ask the user which employee they want to give information about next
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
            if (data.whichEmployee === "Finished") {return generatehtml(employees)};
        })

};
//upon selecting intern, the user will get the questions from the internquestionsarray and the answers they give will be stored and able to be pulled
const internQuestions = () => {
    inquirer
        .prompt(internQuestionsArray)
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.school, data.email)
            employees.push(intern);
             whichEmployee();
        })
};
//upon selecting engineer, the user will get the questions from the engineerquesetionsarray and the answers they give will be stored and able to be pulled

const engineerQuestions = () => {
    inquirer
        .prompt(engineerQuestionsArray)
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.github, data.email)
            employees.push(engineer);
            whichEmployee();
        })
};



//calls the init function
init();











