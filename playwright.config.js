// playwright.config.js
module.exports = {
  testDir: './tests',
  timeout: 60000,
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    headless: true,
  },
};
