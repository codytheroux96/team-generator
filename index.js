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
















