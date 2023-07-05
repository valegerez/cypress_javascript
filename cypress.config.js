const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line global-require
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: ['cypress/e2e/**/*.{feature,features}', 'cypress/e2e/**/*.cy.{js,ts}']
  },
});
