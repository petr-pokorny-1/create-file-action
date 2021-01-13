let processContent = function (content, doubleQuotesToSingle) {
    return new Promise((resolve) => {
        if (doubleQuotesToSingle) {
            content = content.replace(/\"\"/g, '\"');
        }
        resolve(content);
    });
  };
  
module.exports = processContent;