const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = ({title, description, TOC, install, usage, license, contribution, test, github, email
}) =>
  ` 
# ${title}

## Description

${description}

## Table Of Contents

${TOC}

## Installation

${install}

## Usage

${usage}

## License

${license}

## Contributions

${contribution}

## Testing

${test}

## Questions
To reach me for further questions, my github is ${github} and my email is ${email} 
`;
;

inquirer
  .prompt([
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
      message: "how is your README.md organized (Table of Contents)?",
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
      name: "usage",
    },
    {
      type: "input",
      message: "What License was used?",
      name: "license",
    },
    {
      type: "input",
      message: "Who contributed on this project?",
      name: "contribution",
    },
    {
      type: "input",
      message: "How do you test this application?",
      name: "test",
    },
    {
      type: "input",
      message: "What is your Github?",
      name: "github",
    },
    {
      type: "input",
      message: "What is a good email to reach you at?",
      name: "email",
    },
  ])
  .then((responses) => {
    const readmeContent = generateREADME(responses);

    fs.writeFile("README.md", readmeContent, (err) =>
      err ? console.log(err) : console.log("README.md Generated")
    );
  });
