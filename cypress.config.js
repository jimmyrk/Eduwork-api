const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // env: {
  //   email: 'userEmail',
  //   password: 'userPassword',
  // },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});