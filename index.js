const core = require('@actions/core');
const saveFile = require('./saveFile');
const processContent = require('./processContent');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const filePath = core.getInput('filePath');
    core.info(`Saving content to filePath ${filePath} ...`);
    const doubleQuotesToSingle = core.getInput('doubleQuotesToSingle');

    let content = core.getInput('content');
    core.info(`doubleQuotesToSingle: ${doubleQuotesToSingle}`);
    
    content = await processContent(content, doubleQuotesToSingle);

    await saveFile(filePath, content);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
