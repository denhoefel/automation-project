// playwright.config.js
module.exports = {
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    headless: true,
  },
};
