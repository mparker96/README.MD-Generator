const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your project about? (Description)",
    name: "description",
  },
  {
    type: "input",
    message: "how is your README.md organized (Table of Contents)",
    name: "TOC",
  },
  {
    type: "input",
    message: "How did you install this application?",
    name: "install",
  },
  {
    type: "input",
    message: "What is the use of this application?",
    name: 'usage'
  },
  {
    type: 'input',
    message:'What License was used?',
    name:'license'
  },
  {
    type: 'input',
    message: 'Who contributed on this project',
    name:'contribution'
  },
  {
    type: 'input',
    message: 'How do you test this application?',
    name:'test'
  },
  {
    type: 'input',
    message: 'How can you be contacted for further questions?',
    name: 'questions'
  }
]);
