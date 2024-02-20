const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://zero.webappsecurity.com/login.html',
    setupNodeEvents(on, config) {
      defaultCommandTimeout:15000
      // implement node event listeners here
    },
    env: {
      qa_url:'https://dashboard-qa.restoreme.care/',
      username: 'admin@nurture.com',
      password: '^wL<F0X1k4kE',
    },
  },
});
