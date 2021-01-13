const core = require('@actions/core');
const fs = require('fs').promises;

// most @actions toolkit packages have async methods
async function run() {
  try {
    const filePath = core.getInput('filePath');
    core.info(`Saving content to filePath ${filePath} ...`);
    const doubleQuotesToSingle = core.getInput('doubleQuotesToSingle');

    const content = core.getInput('content');
    core.info(`doubleQuotesToSingle: ${doubleQuotesToSingle}`);
    if (doubleQuotesToSingle) {
      content = content.replace('\"\"', '\"');
    }
    
    await fs.writeFile(filePath, content, 'utf8');

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
