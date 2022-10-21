// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (data.licenses === "MIT") {
//     return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
//   } else if (data.licenses === "APACHE 2.0") {
//     return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
//   } else if (data.licenses === "GPL") {
//     return `[![License: GPL](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
//   } else {
//     return "";
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(licenses) {
//   if (licenses === "MIT") {
//     console.log("MIT")
//     return "[MIT](#MIT)"
//   } else if (licenses === "APACHE 2.0") {
//     console.log("APACHE 2.0")
//     return "[APACHE 2.0](#APACHE 2.0)"
//   } else if (licenses === "GPL") {
//     console.log("GPL")
//     return "[GPL](#GPL)"
//   } else {
//     console.log("please enter a license")
//     return "";
//   }
// }

// renderLicenseLink("MIT")

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(licenses) {
//   return  `## License: 
//   ${renderLicenseBadge(licenses)}
//   ${renderLicenseLink(licenses)}
//   `
// }

function renderLicenseBadge(licenses) {
  if (licenses !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${licenses}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.licenses)}
  ## Description:
  ${data.description}
  ## Table of Contents:
  [Installation](#installation)
  [Usage](#usage)
  [License](#licenses)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}

  ## Licenses: 
  This repo is licensed under the
  ${data.licenses} license. Please see the following link:
  [${data.licenses}](#${data.licenses})
  ## Contributing:
  ${data.contribution}
  ## Tests:
  ${data.test}
  ## Questions:
  See my GitHub at https://github.com/${data.username}
   To reach me at my personal email, please follow this link: [here](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
