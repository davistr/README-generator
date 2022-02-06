// Return license badge per user input - If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        if (license == 'MIT') {
            return `
![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
        }
        else if (license == 'APACHE 2.0') {
            return `
![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
        }
        else if (license == 'GPL 3.0') {
            return `
![License](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
        }
        else if (license == 'BSD 3') {
            return `
![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
        }
    }
    return '';
}

// Return the license link - If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return `* [License](#license)`;
    }
    return '';
}

// Return the license section of README - If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License 

This project is licensed under the ${license} license.`;
    }
    return '';
}

// Generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation 

To install dependencies, run the below command:

    ${data.dependencies}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, run the below command:


    ${data.tests}

## Questions

If you have questions about this repo, you can contact me at ${data.email}. You can find more of my work on [GitHub](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;