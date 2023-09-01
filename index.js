// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'Title',
        message: 'What is your Readme title?',
      },
      {
        type: 'input',
        name: 'Decription',
        message: 'Enter your Readme description',
      },
      {
        type: 'input',
        name: 'License',
        message: 'What license would you like to use?',
      },
      {
        type: 'input',
        name: 'Github',
        message: 'Please enter your Github username',
      },
      {
        type: 'input',
        name: 'Screenshot',
        message: 'Please include a screen shot of your application',
      },   
      {
        type: 'input',
        name: 'Email',
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
      const markdown = generateMarkdown(answers); // Assuming generateMarkdown is a function to create Markdown content
      writeToFile('README.md', markdown);
    })
    .catch(error => console.error(error));
}

// Function call to initialize app
init();