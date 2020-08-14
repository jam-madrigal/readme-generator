// function to generate markdown for README
function generateMarkdown(data) {

  // Declaring a variable for a badge, and setting conditionals that change the badge based on user input
  let badge = "";
  if (data.license === "Eclipse Public License 1.0 (EPL-1.0)") {
      badge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }

  else if (data.license === "CC0 1.0 Universal (CC0 1.0)Public Domain Dedication") {
    badge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]'
  }

  else {
    badge = `[![License: CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png)]`
  }

// Generating the readme, basically writing out a whole readme in a template literal

  return `
${badge}
# ${data.title}
---

# Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Contributing](#Contributing)
- [Questions](#questions)


# Description
${data.description}

# Usage
${data.usage}

# Installation
${data.installation}

# Usage
${data.usage}

# License
${data.license}

# Tests
${data.tests}

# Contributing
${data.contributors}

# Questions
${data.questions}

- Creator information
---
Github profile: https://github.com/${data.username}
Contact email: ${data.email}


`;
}

module.exports = generateMarkdown;
