const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      base_url: process.env.base_url,
      validusername: process.env.validusername,
      validpassword: process.env.validpassword,
    },
  },
});
