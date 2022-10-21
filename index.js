// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your repo?",
    name: "title",
  },
  {
    type: "input",
    message: "Please describe your repo",
    name: "description",
  },
  {
    type: "checkbox",
    message: "What is the license of your repo?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email-address",
  },
];

function askQuestions() {
  inquirer.prompt(questions).then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    writeToFile("generated-README.md", answers);
  });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) {
      throw err;
    }
    console.log("success!")
  });
}

// TODO: Create a function to initialize app
function init() {
  askQuestions();
}

// Function call to initialize app
init();
