const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    "Enter your project title.",
    "Enter a project description.",
    "Enter installation information.",
    "Enter usage information.",
    "Choose a license for your project.",
    "List your project contributors",
    "List any tests for your project.",
    "Write how to ask questions about the project (Maybe list contact information).",
];

// function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, generateMarkdown(answers), function(err) {
        if (err) {
            throw (err);  
        }
        else console.log("File successfully written.");
    })

};

// function to initialize program
function init() {
    inquirer
        .prompt([
        {
        type: "input",
        message: `${questions[1]}`,
        name: "title"
        },

        {
        type: "input",
        message: `${questions[2]}`,
        name: "description"
        },

        {
        type: "input",
        message: `${questions[3]}`,
        name: "installation"
        },

        {
        type: "list",
        message: `${questions[4]}`,
        name: "usage",
        choices: 
            [
            "Eclipse Public License 1.0 (EPL-1.0)",
            "CC0 1.0 Universal (CC0 1.0)Public Domain Dedication",
            "Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)",
            ]
        },

        {
        type: "input",
        message: `${questions[5]}`,
        name: "contributors"
        },

        {
        type: "input",
        message: `${questions[6]}`,
        name: "tests"
        },

        {
        type: "input",
        message: `${questions[7]}`,
        name: "questions"
        },

    ]).then((answers) => {
        console.log(answers)
        writeToFile("README.MD", answers);
     })
    
};

// function call to initialize program
init();

