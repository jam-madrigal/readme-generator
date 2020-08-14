// function to generate markdown for README
function generateMarkdown(data) {
  let badge = ``;
  if (data.license === "Eclipse Public License 1.0 (EPL-1.0)") {
      badge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
  return `
${badge};
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
