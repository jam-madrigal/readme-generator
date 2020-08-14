// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
---

# Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
- [Contributing](#Contributing)


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

# Questions
${data.questions}

- Creator information
Github profile: https://github.com/${data.username}
Contact email: ${data.email}

# Contributing
${data.contributors}

`;
}

module.exports = generateMarkdown;
