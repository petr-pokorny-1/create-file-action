const process = require('process');
const cp = require('child_process');
const path = require('path');
const processContent = require('./processContent');

test('Quotes test', async () => {
  const actual = 'test \"\"quoted\"\" string \"\"quoted2\"\" and \"not\" quoted';
  const expected = 'test \"quoted\" string \"quoted2\" and \"not\" quoted';
  await expect(processContent(actual, true))
    .resolves.toBe(expected);
});