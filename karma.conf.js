process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    basePath: 'src',
    frameworks: ['jasmine'],
    files: ['*.spec.js'],
  });
};
