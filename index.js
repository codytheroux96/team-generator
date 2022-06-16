const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./employee.js");
const {Engineer, engineerQuestionsArray} = require("./lib/engineer.js");
const {Intern, internQuestionsArray} = require("./lib/intern.js");
const {Manager, managerQuestionsArray}= require("./lib/manager.js");

const init = () => {managerQuestions};
const managerQuestions = () => {
    inquirer
    .prompt(managerQuestionsArray)
    .then((data) => {
        data = new Manager (data.name, data.id, data.office, data.email)
    })
};
const whichEmployee = () => {
    inquirer.prompt(
        {
            type: "rawlist",
            name: "whichEmployee",
            message: "Which employee would you like to add next?",
            choices: ["Manager", "Engineer", "Intern", "Finished"],
            
        }
        .then (data => {
            if (data.whichEmployee === "Manager")
            {managerQuestions();};
            if (data.whichEmployee === "Engineer")
            {engineerQuestions ();};
            if (data.whichEmployee === "Intern")
            {internQuestions();};
            if (data.whichEmployee === "Finished");
        })
    )
}
const internQuestions = () => {
    inquirer
    .prompt(internQuestionsArray)
    .then((data) => {
        data = new Manager (data.name, data.id, data.school, data.email)
    })
};
const engineerQuestions = () => {
    inquirer
    .prompt(engineerQuestionsArray)
    .then((data) => {
        data = new Manager (data.name, data.id, data.github, data.email)
    })
};
















init();