// Requiring dependencies
var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
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
    },
}
]).then(function(data) {

    var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  });