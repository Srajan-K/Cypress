const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      qa_url:'https://dashboard-qa.restoreme.care/',
      username: 'admin@nurture.com',
      password: '^wL<F0X1k4kE',
    },
  },
});
