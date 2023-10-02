// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license === 'MIT'){
  return `[MIT License](https://opensource.org/licenses/MIT)`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if(license === 'MIT'){
  return `## License
  This project is licensed under the MIT License.`
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [License Used](#license-used)
  * [Languages & Dependencies](#languagesanddependencies) // This anchor should be lowercase and use hyphens: #languages-and-dependencies
  * [How to Use This Application](#HowtoUseThisApplication) // This anchor should be lowercase and use hyphens: #how-to-use-this-application
  * [Contributors](#contributors)
  * [Questions](#questions)
  
  ## Description
  ${data.description}

  ## License Used
  ${data.license}

  ## Languages & Dependencies
  ${data.languages}

  ## Screenshot
  ![alt-text](${data.screenshot})

  ## Contributors
  ${data.contributors}

  ## Features
  ${data.github}


  ## How to Use This Application:
  ${data.screenshot}

  ## Contributors
  ${data.contributors}

  ## Questions
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
  `;
}

module.exports = generateMarkdown;

