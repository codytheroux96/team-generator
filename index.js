const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./employee.js");
const {Engineer, engineerQuestionsArray} = require("./lib/engineer.js");
const {Intern, internQuestionsArray} = require("./lib/intern.js");
const {Manager, managerQuestionsArray}= require("./lib/manager.js");


















const writeFile = (fileContent) => {
    fs.writeFile("./output/index.html", fileContent, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Your team profile file has been generated!");
		}
	});
};