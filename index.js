const fs = require("fs");
const inquirer = require("inquirer")



















const writeFile = (fileContent) => {
    fs.writeFile("./output/index.html", fileContent, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Your team profile file has been generated!");
		}
	});
};