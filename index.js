// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title",
    },
    {
        type: "input",
        message: "Write description about the project",
        name: "description",
    },
    {
        type: "input",
        message: "Please provide what installations are needed for the project.",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the usage for this project?",
        name: "usage",
    },
    {
        type: "list",
        message: "What license was used for this project.",
        name: "license",
        choices: [
            "APACHE License 2.0",
            "MIT License",
            "The Unlicense",
            "None",
        ],
    },
    {
        type: "input",
        message: "Please provide your GitHub username.",
        name: "username",
    },
    {
        type: "input",
        message: "Please provide your email.",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log(":)");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile("README.2.md", generateMarkdown(response));
        });
}

// Function call to initialize app
init();
