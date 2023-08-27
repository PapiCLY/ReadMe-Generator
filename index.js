// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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
        name: 'Email',
        message: 'Please enter your email address',
      }   
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
