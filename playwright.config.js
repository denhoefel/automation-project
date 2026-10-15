// playwright.config.js
module.exports = {
  testDir: './tests',
  timeout: 45000,
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    headless: true,
  },
};
