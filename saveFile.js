const fs = require('fs').promises;

let saveFile = async function (filePath, content) {
    await fs.writeFile(filePath, content, 'utf8');
};

module.exports = saveFile;