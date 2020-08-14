// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

# Table of contents
- [Title](#${data.title})
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [Contributors](#contributors)


# Desription
${data.description}

# Usage
${data.usage}

# Installation
${data.installation}

# Usage
${data.usage}

# Tests
${data.tests}

# Questions
${data.questions}

# Contributors
${data.contributors}

`;
}

module.exports = generateMarkdown;
