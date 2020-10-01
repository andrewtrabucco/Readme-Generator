// Pulling additional Javascript file int
// const generateMarkdown = require("./generateMarkdown.js");
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
      name: "name",
      message: "Question"
    },
    {
      type: "input",
      name: "location",
      message: "Question"
    },
    {
      type: "input",
      name: "hobby",
      message: "Question"
    },
    {
      type: "input",
      name: "food",
      message: "Question"
    },
    {
      type: "input",
      name: "github",
      message: "Question"
    },
    {
      type: "input",
      name: "linkedin",
      message: "Question"
    }
  ]);
}

function generateReadme(answers)    {
    return ``
};

promptUser()
  .then(function(answers) {
    const readMe = generateReadme(answers);
    
    return writeFileAsync("Readme.md", readMe);
    
  })
  .then(function() {
    console.log("Successfully generated Readme.md");
  })
  .catch(function(err) {
    console.log(err);
  });