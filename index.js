// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is your Readme title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter your Readme description',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What license would you like to use?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username',
      },
      {
        type: 'input',
        name: 'screenshot',
        message: 'Please include a screen shot of your application',
      },   
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
      }   
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err =>{
    if(err){
      return console.log(err);
    }

    console.log('Congrats, you just created your README.md file!')
  })
}

// TODO: Create a function to initialize app
function init() {
  // Prompt the user with questions and generate the README
  inquirer.prompt(questions)
    .then(answers => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    })
    .catch(error => console.error(error));
}

// Function call to initialize app
init();