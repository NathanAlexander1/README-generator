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
    type: "input",
    message: "Please include installation instructions for your repo",
    name: "installation",
  },
  {
    type: "input",
    message: "Please include usage information for your repo",
    name: "usage",
  },
  {
    type: "input",
    message: "Please include info on contribution guidelines for your repo",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please include test instructions for your repo",
    name: "test",
  },
  {
    type: "list",
    message: "What is the license of your repo?",
    name: "licenses",
    choices: ["MIT", "APACHE", "GPL", "none"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
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
    console.log("success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  askQuestions();
}

// Function call to initialize app
init();
