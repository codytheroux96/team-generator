const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./employee");
const {Engineer, engineerQuestionsArray} = require("./lib/engineer");
const {Intern, internQuestionsArray} = require("./lib/intern");
const {Manager, managerQuestionsArray}= require("./lib/manager");


















const writeFile = (fileContent) => {
    fs.writeFile("./output/index.html", fileContent, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Your team profile file has been generated!");
		}
	});
};