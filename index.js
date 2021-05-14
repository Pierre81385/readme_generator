// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project name?",
    name: "project",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "";
      }
    },
  },
  {
    type: "input",
    message: "Write a description about your project:",
    name: "description",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "";
      }
    },
  },
  {
    type: "list",
    message: "What license would you like to use?",
    choices: ["MIT", "ISC", "GPL"],
    name: "license",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "install",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "";
      }
    },
  },
  {
    type: "input",
    message:
      "Provide instructions and examples for use, and include screenshots as needed.",
    name: "usage",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "";
      }
    },
  },
  {
    type: "input",
    message: "Please list your collaborators, if any:",
    name: "collaborators",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "";
      }
    },
  },
  {
    type: "input",
    message: "Please provide guidelines for how to contribute:",
    name: "contributors",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "";
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log("write file please");

  return fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);

    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
