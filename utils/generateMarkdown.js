// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.license}
  ## Screenshot
  ![alt-text](${data.screenshot})
  ## Table of Contents
  * [Features](#features)
  * [Languages & Dependencies](#languagesanddependencies) // This anchor should be lowercase and use hyphens: #languages-and-dependencies
  * [How to Use This Application](#HowtoUseThisApplication) // This anchor should be lowercase and use hyphens: #how-to-use-this-application
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Features
  ${data.github}
  ## Languages & Dependencies
  ${data.email}
  ## How to Use This Application:
  ${data.screenshot}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
  `;
}

module.exports = generateMarkdown;

