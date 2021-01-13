const core = require('@actions/core');
const wait = require('./wait');
const fs = require('fs').promises;

// most @actions toolkit packages have async methods
async function run() {
  try {
    const filePath = core.getInput('filePath');
    core.info(`Saving content to filePath ...`);

    const content = core.getInput('content');
    await fs.writeFile(filePath, content, 'utf8');

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
