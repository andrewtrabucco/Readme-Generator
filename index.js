const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "What is the title of this Readme.md?: "
    },
    {
      type: "input",
      name: "Description",
      message: "Write a brief description of what this program does: "
    },
    {
      type: "input",
      name: "Table of Contents",
      message: "Question"
    },
    {
      type: "input",
      name: "Installation",
      message: "Question"
    },
    {
      type: "input",
      name: "Usage",
      message: "Write a brief description of Usage cases."
    },
    {
      type: "input",
      name: "License",
      message: "Question"
    },
    {
      type: "input",
      name: "Contributing",
      message: "Question"
    },
    {
      type: "input",
      name: "Tests",
      message: "Question"
    },
    {
      type: "input",
      name: "Questions",
      message: "Question"
    }
  ]);
}

function generateReadme()    {
    return `${answers}`
};

promptUser()
  .then(function(answers) {
    const readMe = generateReadme(answers);
    
    return writeFileAsync("README.md", readMe);
    
  })
  .then(function() {
    console.log("Successfully generated Readme.md");
  })
  .catch(function(err) {
    console.log(err);
  });